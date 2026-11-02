
import { createClient } from
  "https://esm.sh/@supabase/supabase-js@2";

const SUPABASE_URL =
  "https://dqaonkogzghudibcwebn.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_BWXs5VPixYw02jsixHISew_NqILOCWo";

export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

