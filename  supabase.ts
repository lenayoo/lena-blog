import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

if (!supabaseKey || !supabaseUrl) {
  throw new Error('Supabase key를 불러올 수 없습니다.');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
