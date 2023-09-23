import { createClient } from "@supabase/supabase-js";

const supabeseUrl = "https://ieshyomyyvcfrqtzycbm.supabase.co"
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imllc2h5b215eXZjZnJxdHp5Y2JtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUzNjM1NzIsImV4cCI6MjAxMDkzOTU3Mn0.3KSkZDqPeiolMPFDosUrsS2h7pSB_W5nhCbORMVlG3k"

const supabase = createClient(supabeseUrl, anonKey)

export default supabase;