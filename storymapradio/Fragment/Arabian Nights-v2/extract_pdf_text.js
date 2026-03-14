const fs = require('fs');
const zlib = require('zlib');

const pdfPath = process.argv[2];

if (!pdfPath) {
  console.error('Usage: node extract_pdf_text.js <pdf-path>');
  process.exit(1);
}

const data = fs.readFileSync(pdfPath);
const text = data.toString('binary');
const streamRegex = /<<(.*?)>>\s*stream\r?\n([\s\S]*?)\r?\nendstream/g;
const pieces = [];

function decodePdfString(input) {
  return input
    .replace(/\\([\\()])/g, '$1')
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, '\r')
    .replace(/\\t/g, '\t')
    .replace(/\\b/g, '\b')
    .replace(/\\f/g, '\f')
    .replace(/\\([0-7]{1,3})/g, (_, oct) => String.fromCharCode(parseInt(oct, 8)));
}

function extractTextOperators(content) {
  const result = [];
  const btBlocks = content.match(/BT[\s\S]*?ET/g) || [];

  for (const block of btBlocks) {
    const textTokens = [];
    const stringRegex = /\((?:\\.|[^\\()])*?\)\s*Tj|\[(?:[\s\S]*?)\]\s*TJ/g;
    const matches = block.match(stringRegex) || [];

    for (const match of matches) {
      if (match.endsWith('Tj')) {
        const raw = match.slice(1, match.lastIndexOf(')'));
        textTokens.push(decodePdfString(raw));
      } else if (match.endsWith('TJ')) {
        const inner = match.slice(1, match.lastIndexOf(']'));
        const parts = inner.match(/\((?:\\.|[^\\()])*?\)/g) || [];
        textTokens.push(parts.map((part) => decodePdfString(part.slice(1, -1))).join(''));
      }
    }

    if (textTokens.length) {
      result.push(textTokens.join(' '));
    }
  }

  return result.join('\n');
}

let match;
while ((match = streamRegex.exec(text)) !== null) {
  const dict = match[1];
  const rawStream = Buffer.from(match[2], 'binary');
  let content = rawStream;

  if (/\/FlateDecode/.test(dict)) {
    try {
      content = zlib.inflateSync(rawStream);
    } catch {
      continue;
    }
  }

  const decoded = content.toString('latin1');
  const extracted = extractTextOperators(decoded);
  if (extracted.trim()) {
    pieces.push(extracted);
  }
}

process.stdout.write(pieces.join('\n\n'));
