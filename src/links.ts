export const MARKETPLACE_URL =
  import.meta.env.VITE_MARKETPLACE_URL ?? "https://shopping.dezenmart.com";
export const FOOD_URL =
  import.meta.env.VITE_FOOD_URL ?? "https://foods.dezenmart.com";
export const EXPRESS_URL =
  import.meta.env.VITE_EXPRESS_URL ?? "https://express.dezenmart.com";

export const express = (path: string) => `${EXPRESS_URL}${path}`;
