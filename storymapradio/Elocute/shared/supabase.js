// Shared Supabase client — loaded by apps that use <script type="module">
// For plain-script apps, load the UMD bundle directly and use window._sb instead.
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL  = 'https://nqelzijdjgpvzcczfvvy.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xZWx6aWpkamdwdnpjY3pmdnZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NjUyMzgsImV4cCI6MjA4ODM0MTIzOH0.oVB3MNpvsTTnaqmdimlSrRPzx_c7czDARTerzvC3Et8';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);

// Also expose as global so non-module scripts can access it if needed
window._sb = window._sb || supabase;
