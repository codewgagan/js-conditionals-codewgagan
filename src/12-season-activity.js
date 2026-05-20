// import { act } from "react";

/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here
  if (month < 1 || month > 12) return null;
  let season;

  if (month === 12 || month === 1 || month === 2) {
    season = "Winter";
  } else if (month === 3 || month === 4 || month === 5) {
    season = "Spring";
  } else if (month === 6 || month === 7 || month === 8) {
    season = "Summer";
  } else if (month === 9 || month === 10 || month === 11) {
    season = "Autumn";
  }

  let activity;
  if (season === "Winter" && temperature < 0) {
    activity = "skiing";
  } else if (season === "Winter" && temperature >= 0) {
    activity = "ice skating";
  } else if (season === "Spring" && temperature > 20) {
    activity = "hiking";
  } else if (season === "Spring" && temperature <= 20) {
    activity = "museum visit";
  } else if ((season ==="Summer" && temperature > 35)) {
    activity = "swimming";
  } else if ((season == "Summer" && temperature <= 35)) {
    activity = "cycling";
  } else if (season === "Autumn" && temperature > 15) {
    activity = "nature walk";
  } else if (season === "Autumn" && temperature <= 15) {
    activity ="reading at a cafe";
  }
  return {season,activity}

  // const monthToSeason = {
  //     12:"Winter", 1:"Winter", 2:"Winter",
  //     3:"Spring",4:"Spring",5:"Spring",
  //     6:"Summer", 7:"Summer", 8:"Summer",
  //     9:"Autumn", 10:"Autumn", 11:"Autumn"
  //   };
  //   if (month < 1 || month > 12) return null;
  //   const season = monthToSeason[month];
  //   // Determine activity based on season + temperature
  //   let activity;

  //   if (season === "Winter") {
  //     activity = temperature < 0 ? "skiing" : "ice skating";
  //   } else if (season === "Spring")
  //     activity = temperature > 20 ? "hiking" : "museum visit";
  //   else if (season === "Summer") {
  //     activity = temperature > 35 ? "swimming" : "cycling";
  //   } else if (season === "Autumn") {
  //     activity = temperature > 15 ? "nature walk" : "reading at a cafe";
  //   }

  //   return { season, activity };
}
