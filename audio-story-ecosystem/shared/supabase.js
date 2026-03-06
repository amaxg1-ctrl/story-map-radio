import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

const SUPABASE_URL = 'https://nqelzijdjgpvzcczfvvy.supabase.co'
const SUPABASE_KEY = 'sb_publishable_aLNrGIW6q4IRgabZ83HHtw_kG-qXydg'

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// Also expose globally so non-module scripts can access it
window.supabase = supabase
