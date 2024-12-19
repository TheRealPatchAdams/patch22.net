import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zzwwgodhjgtjktqagqsd.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp6d3dnb2Roamd0amt0cWFncXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ1MTIyMjYsImV4cCI6MjA1MDA4ODIyNn0.4mEiaHUndNZo8M9zNS5ljtUTqprYf4ed4P1Wpng8I4U'; // Replace with your Supabase Anon Key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
