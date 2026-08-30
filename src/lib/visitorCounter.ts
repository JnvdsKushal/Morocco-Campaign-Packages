import { supabase } from './supabaseClient';

export async function incrementVisitorCount(): Promise<number> {
  const { data, error } = await supabase.rpc(
    'increment_visitor_count'
  );

  if (error) {
    console.error('Failed to increment visitor count:', error);
    throw error;
  }

  return Number(data);
}