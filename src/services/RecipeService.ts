import { Recipe } from '../models/Recipe';
import { supabase } from '../services/supabaseClient';

export class RecipeService {
  async getRecipes(): Promise<Recipe[]> {
    const { data, error } = await supabase
      .from('recipes')
      .select('*');
    
    if (error) throw error;
    return data;
  }

  async toggleFavorite(id: string, isFavorite: boolean): Promise<void> {
    const { error } = await supabase
      .from('recipes')
      .update({ is_favorite: isFavorite })
      .eq('id', id);
    
    if (error) throw error;
  }

  async getRecipesByCategory(category: string): Promise<Recipe[]> {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('category', category);
    
    if (error) throw error;
    return data;
  }

  async getFavoriteRecipes(): Promise<Recipe[]> {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('is_favorite', true);
    
    if (error) throw error;
    return data;
  }
} 