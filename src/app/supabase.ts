import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://swpusnutooprmachsnzw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3cHVzbnV0b29wcm1hY2hzbnp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3OTUyMDgsImV4cCI6MjA0NTM3MTIwOH0.fEKYxjxbq7rBi5gLAr5F_7mRIjcS-4Bkww9RdlkQ3xg";
export const supabase = createClient(supabaseUrl, supabaseKey);
