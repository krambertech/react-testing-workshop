// ⚠️ DO NOT EDIT THIS FILE ⚠️

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xkjvnlmyxegydrgpjjvx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhranZubG15eGVneWRyZ3BqanZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQwMjM2NDgsImV4cCI6MTk3OTU5OTY0OH0.yceOP24L4axA_7jsvwEYz-8xsVXZ9vZI9GGJcRVO7ro";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
