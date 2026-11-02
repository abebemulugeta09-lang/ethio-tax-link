import { createClient } from
  "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL = "PASTE_YOUR_PROJECT_URL";
const SUPABASE_PUBLISHABLE_KEY = "PASTE_YOUR_PUBLISHABLE_KEY";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
