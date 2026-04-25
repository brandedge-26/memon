export type Category = "All" | "Panels" | "Batteries" | "Accessories";
export type Quality  = "Original" | "Compatible" | "Refurbished";

export interface Product {
  id: number;
  name: string;
  brand: string;
  model: string;
  category: Exclude<Category, "All">;
  quality: Quality;
  price: number;
  oldPrice?: number;
  stock: "In Stock" | "Limited" | "Out of Stock";
  rating: number;
  reviews: number;
  accent: string;
  tag?: string;
}

export const PRODUCTS: Product[] = [
  { id: 1,  name: "OLED Screen Assembly",   brand: "Apple",      model: "iPhone 15 / 15 Pro",       category: "Panels",      quality: "Original",    price: 14500, oldPrice: 17000, stock: "In Stock",  rating: 4.9, reviews: 42,  accent: "#1c1c1e", tag: "Hot" },
  { id: 2,  name: "OLED Screen Assembly",   brand: "Apple",      model: "iPhone 14 / 14 Pro",       category: "Panels",      quality: "Original",    price: 12000, oldPrice: 14500, stock: "In Stock",  rating: 4.8, reviews: 67,  accent: "#1c1c1e"             },
  { id: 3,  name: "OLED Screen Assembly",   brand: "Apple",      model: "iPhone 13 / 13 Pro",       category: "Panels",      quality: "Original",    price: 9500,  oldPrice: 11500, stock: "Limited",   rating: 4.8, reviews: 91,  accent: "#1c1c1e"             },
  { id: 4,  name: "AMOLED Display",         brand: "Samsung",    model: "Galaxy S24 / S24+",        category: "Panels",      quality: "Original",    price: 11000, oldPrice: 13000, stock: "In Stock",  rating: 4.7, reviews: 38,  accent: "#1428A0", tag: "New" },
  { id: 5,  name: "Super AMOLED Display",   brand: "Samsung",    model: "Galaxy S23 / S23 Ultra",   category: "Panels",      quality: "Original",    price: 9000,  oldPrice: 10500, stock: "In Stock",  rating: 4.7, reviews: 55,  accent: "#1428A0"             },
  { id: 6,  name: "LCD Display Assembly",   brand: "Samsung",    model: "Galaxy A54 / A34",         category: "Panels",      quality: "Compatible",  price: 3200,  oldPrice: 4000,  stock: "In Stock",  rating: 4.4, reviews: 120, accent: "#1428A0"             },
  { id: 7,  name: "AMOLED Display",         brand: "Xiaomi",     model: "Redmi Note 13 / 12",       category: "Panels",      quality: "Original",    price: 4800,  oldPrice: 5800,  stock: "In Stock",  rating: 4.6, reviews: 74,  accent: "#FF6900"             },
  { id: 8,  name: "LCD Display Assembly",   brand: "Xiaomi",     model: "Redmi 12C / 13C",          category: "Panels",      quality: "Compatible",  price: 2200,  oldPrice: 2800,  stock: "In Stock",  rating: 4.3, reviews: 98,  accent: "#FF6900"             },
  { id: 9,  name: "OLED Display",           brand: "OnePlus",    model: "OnePlus 12 / 11",          category: "Panels",      quality: "Original",    price: 8500,  oldPrice: 10000, stock: "Limited",   rating: 4.7, reviews: 29,  accent: "#EB0029", tag: "Hot" },
  { id: 10, name: "LCD Display Assembly",   brand: "Oppo",       model: "Oppo A78 / A58",           category: "Panels",      quality: "Compatible",  price: 2800,  oldPrice: 3500,  stock: "In Stock",  rating: 4.3, reviews: 61,  accent: "#1D7D45"             },
  { id: 11, name: "LCD Display Assembly",   brand: "Vivo",       model: "Vivo Y36 / Y27",           category: "Panels",      quality: "Compatible",  price: 2600,  oldPrice: 3200,  stock: "In Stock",  rating: 4.2, reviews: 45,  accent: "#415FFF"             },
  { id: 12, name: "LCD Display Assembly",   brand: "Tecno",      model: "Tecno Spark 20 / 10",      category: "Panels",      quality: "Compatible",  price: 1800,  oldPrice: 2200,  stock: "In Stock",  rating: 4.1, reviews: 83,  accent: "#0098DA"             },
  { id: 13, name: "Li-Ion Battery",         brand: "Apple",      model: "iPhone 15 / 15 Plus",      category: "Batteries",   quality: "Original",    price: 4200,  oldPrice: 5500,  stock: "In Stock",  rating: 4.9, reviews: 56,  accent: "#1c1c1e", tag: "Hot" },
  { id: 14, name: "Li-Ion Battery",         brand: "Apple",      model: "iPhone 14 / 14 Pro Max",   category: "Batteries",   quality: "Original",    price: 3800,  oldPrice: 4800,  stock: "In Stock",  rating: 4.8, reviews: 89,  accent: "#1c1c1e"             },
  { id: 15, name: "Li-Ion Battery",         brand: "Apple",      model: "iPhone 13 / 13 Mini",      category: "Batteries",   quality: "Original",    price: 3200,  oldPrice: 4000,  stock: "In Stock",  rating: 4.8, reviews: 134, accent: "#1c1c1e"             },
  { id: 16, name: "Li-Ion Battery",         brand: "Apple",      model: "iPhone 12 / 12 Pro",       category: "Batteries",   quality: "Compatible",  price: 1800,  oldPrice: 2400,  stock: "In Stock",  rating: 4.5, reviews: 211, accent: "#3a3a3c"             },
  { id: 17, name: "High-Capacity Battery",  brand: "Samsung",    model: "Galaxy S24 / S24+",        category: "Batteries",   quality: "Original",    price: 3500,  oldPrice: 4500,  stock: "In Stock",  rating: 4.7, reviews: 44,  accent: "#1428A0", tag: "New" },
  { id: 18, name: "High-Capacity Battery",  brand: "Samsung",    model: "Galaxy A54 / A34",         category: "Batteries",   quality: "Compatible",  price: 1500,  oldPrice: 2000,  stock: "In Stock",  rating: 4.4, reviews: 178, accent: "#1428A0"             },
  { id: 19, name: "High-Capacity Battery",  brand: "Xiaomi",     model: "Redmi Note 13 / 12",       category: "Batteries",   quality: "Original",    price: 1800,  oldPrice: 2200,  stock: "In Stock",  rating: 4.5, reviews: 93,  accent: "#FF6900"             },
  { id: 20, name: "High-Capacity Battery",  brand: "Xiaomi",     model: "Redmi 12C / 13C",          category: "Batteries",   quality: "Compatible",  price: 900,   oldPrice: 1200,  stock: "Limited",   rating: 4.2, reviews: 67,  accent: "#FF6900"             },
  { id: 21, name: "High-Capacity Battery",  brand: "Oppo",       model: "Oppo A78 / A58",           category: "Batteries",   quality: "Compatible",  price: 1200,  oldPrice: 1600,  stock: "In Stock",  rating: 4.3, reviews: 52,  accent: "#1D7D45"             },
  { id: 22, name: "High-Capacity Battery",  brand: "Vivo",       model: "Vivo Y36 / Y27",           category: "Batteries",   quality: "Compatible",  price: 1100,  oldPrice: 1500,  stock: "In Stock",  rating: 4.2, reviews: 39,  accent: "#415FFF"             },
  { id: 23, name: "Tempered Glass",         brand: "All Brands", model: "Universal Fit",            category: "Accessories", quality: "Compatible",  price: 200,   oldPrice: 350,   stock: "In Stock",  rating: 4.6, reviews: 390, accent: "#64748b"             },
  { id: 24, name: "Silicone Back Cover",    brand: "Apple",      model: "iPhone 15 / 14 / 13",      category: "Accessories", quality: "Compatible",  price: 350,   oldPrice: 500,   stock: "In Stock",  rating: 4.4, reviews: 210, accent: "#1c1c1e"             },
  { id: 25, name: "65W Fast Charger",       brand: "Xiaomi",     model: "Type-C Universal",         category: "Accessories", quality: "Original",    price: 1800,  oldPrice: 2500,  stock: "In Stock",  rating: 4.7, reviews: 145, accent: "#FF6900", tag: "Hot" },
  { id: 26, name: "20W USB-C Charger",      brand: "Apple",      model: "iPhone 15 / 14 / 13",      category: "Accessories", quality: "Original",    price: 2200,  oldPrice: 3000,  stock: "In Stock",  rating: 4.8, reviews: 88,  accent: "#1c1c1e"             },
  { id: 27, name: "USB-C Cable 1m",         brand: "All Brands", model: "Universal",                category: "Accessories", quality: "Compatible",  price: 250,   oldPrice: 400,   stock: "In Stock",  rating: 4.3, reviews: 520, accent: "#64748b"             },
  { id: 28, name: "Wireless Earbuds",       brand: "Samsung",    model: "Galaxy Buds Compatible",   category: "Accessories", quality: "Refurbished", price: 2500,  oldPrice: 4000,  stock: "Limited",   rating: 4.4, reviews: 67,  accent: "#1428A0", tag: "New" },
];
