import { makeAutoObservable } from 'mobx';
import { Recipe } from '../models/Recipe';
import { RecipeService } from '../services/RecipeService';

export class BookmarkViewModel {
  private recipeService: RecipeService;
  recipes: Recipe[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.recipeService = new RecipeService();
  }

  async fetchFavoriteRecipes() {
    this.loading = true;
    this.error = null;
    try {
      const data = await this.recipeService.getFavoriteRecipes();
      this.recipes = data;
    } catch (e) {
      this.error = "Lỗi tải dữ liệu yêu thích!";
      console.error("Error fetching favorite recipes:", e);
    } finally {
      this.loading = false;
    }
  }

  async toggleFavorite(id: string, isFavorite?: boolean) {
    try {
      await this.recipeService.toggleFavorite(id, !isFavorite);
      await this.fetchFavoriteRecipes();
    } catch (e) {
      this.error = "Lỗi cập nhật yêu thích!";
      console.error("Error toggling favorite:", e);
    }
  }

  clearError() {
    this.error = null;
  }
} 