import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

if (!supabaseKey || !supabaseUrl) {
  throw new Error('Supabase key를 불러올 수 없습니다.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
