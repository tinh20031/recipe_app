import { makeAutoObservable } from 'mobx';
import { Recipe } from '../models/Recipe';
import { RecipeService } from '../services/RecipeService';

export class HomeViewModel {
  private recipeService: RecipeService;
  recipes: Recipe[] = [];
  loading: boolean = false;
  selectedCategory: string = "Tất cả";
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
    this.recipeService = new RecipeService();
  }

  async fetchRecipes() {
    this.loading = true;
    this.error = null;
    try {
      const data = await this.recipeService.getRecipes();
      this.recipes = data;
    } catch (e) {
      this.error = "Lỗi tải dữ liệu!";
      console.error("Error fetching recipes:", e);
    } finally {
      this.loading = false;
    }
  }

  async handleToggleFavorite(id: string, isFavorite?: boolean) {
    try {
      await this.recipeService.toggleFavorite(id, !isFavorite);
      await this.fetchRecipes();
    } catch (e) {
      this.error = "Lỗi cập nhật yêu thích!";
      console.error("Error toggling favorite:", e);
    }
  }

  setSelectedCategory(category: string) {
    this.selectedCategory = category;
  }

  get filteredRecipes(): Recipe[] {
    return this.selectedCategory === "Tất cả"
      ? this.recipes
      : this.recipes.filter(r => r.category === this.selectedCategory);
  }

  clearError() {
    this.error = null;
  }
} 