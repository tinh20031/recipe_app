import { supabase } from '../supabaseClient';

// Lấy danh sách recipes
export async function getRecipes() {
  const { data, error } = await supabase
    .from('recipes')
    .select('*')
    .order('title', { ascending: true });
  if (error) throw error;
  return data;
}

// Thêm recipe mới
export async function addRecipe(recipe) {
  const { data, error } = await supabase
    .from('recipes')
    .insert([recipe])
    .select();
  if (error) throw error;
  return data[0];
}

// Xóa recipe
export async function deleteRecipe(id) {
  const { error } = await supabase
    .from('recipes')
    .delete()
    .eq('id', id);
  if (error) throw error;
}

// Sửa recipe
export async function updateRecipe(id, updates) {
  const { data, error } = await supabase
    .from('recipes')
    .update(updates)
    .eq('id', id)
    .select();
  if (error) throw error;
  return data[0];
}

// Đánh dấu yêu thích
export async function toggleFavorite(id, isFavorite) {
  return updateRecipe(id, { is_favorite: isFavorite });
}
