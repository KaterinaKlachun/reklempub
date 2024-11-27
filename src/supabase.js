import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lrxbcpuacxghzpqrbogw.supabase.co';
const supabaseKey = process.env.VUE_APP_SUPABASE_KEY; // Используем переменную окружения

if (!supabaseKey) {
  throw new Error('Supabase key is missing!');
}

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
