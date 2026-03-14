@echo off
:: Start storymapradio server silently in the background
start /min "" node "%~dp0server.js"
