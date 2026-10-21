// Product URLs. Override per environment via .env (see .env.example).
export const MARKETPLACE_URL =
  import.meta.env.VITE_MARKETPLACE_URL ?? "https://dezenmart.com";
export const FOOD_URL =
  import.meta.env.VITE_FOOD_URL ?? "https://foods.dezenmart.com";
export const EXPRESS_URL =
  import.meta.env.VITE_EXPRESS_URL ?? "http://localhost:3000";

export const express = (path: string) => `${EXPRESS_URL}${path}`;
