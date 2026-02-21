"use strict"

export function createMenu(){
    const nutritionalInformation = document.createElement("p");
    nutritionalInformation.textContent = "Every Dish: 0 Kcal";
    
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const aquaVitaeDiv = document.createElement("div");
    aquaVitaeDiv.classList.add("food-item");
    const aquaVitae = document.createElement("h3");
    aquaVitae.textContent = "Aqua Vitae";
    aquaVitae.classList.add("luxury");
    const aquaVitaeState = document.createElement("p");
    aquaVitaeState.classList.add("state");
    aquaVitaeState.textContent = "Still | Chilled to 42°F | $185 per pour";
    const aquaVitaeDescription = document.createElement("p");
    aquaVitaeDescription.classList.add("description");
    aquaVitaeDescription.textContent = "A study in restraint and radiance. Drawn from imagined alpine sanctuaries, Aqua Vitae offers a silken mouthfeel and crystalline finish. Clean, structured, and luminously composed — hydration elevated to ritual.";
    aquaVitaeDiv.append(aquaVitae, aquaVitaeState, aquaVitaeDescription);

    const velvetBubblesDiv = document.createElement("div");
    velvetBubblesDiv.classList.add("food-item");
    const velvetBubbles = document.createElement("h3");
    velvetBubbles.classList.add("luxury");
    velvetBubbles.textContent = "Velvet Bubbles";
    const velvetBubblesState = document.createElement("p");
    velvetBubblesState.classList.add("state");
    velvetBubblesState.textContent = "Sparkling | Fine Effervescence | $295 per serving";
    const velvetBubblesDescription = document.createElement("p");
    velvetBubblesDescription.classList.add("description");
    velvetBubblesDescription.textContent = "Infused with delicate, persistent micro-pearls and poured tableside with white-glove reverence. Velvet Bubbles glides across the palate with creamy effervescence and couture-level refinement.";
    velvetBubblesDiv.append(velvetBubbles, velvetBubblesState, velvetBubblesDescription);

    const polarCubesDiv = document.createElement("div");
    polarCubesDiv.classList.add("food-item");
    const polarCubes = document.createElement("h3");
    polarCubes.textContent = "Polar Cubes";
    polarCubes.classList.add("luxury");
    const polarCubesState = document.createElement("p");
    polarCubesState.classList.add("state");
    polarCubesState.textContent = "Hand-Carved | Slow-Melt | $75 per cube";
    const polarCubesDescription = document.createElement("p");
    polarCubesDescription.classList.add("description");
    polarCubesDescription.textContent = "Individually sculpted from architecturally frozen crystal blocks, each Polar Cube is tempered over 48 hours to achieve glacial clarity. Designed to chill without compromise.";
    polarCubesDiv.append(polarCubes, polarCubesState, polarCubesDescription);

    const celestialSteamDiv = document.createElement("div");
    celestialSteamDiv.classList.add("food-item");
    const celestialSteam = document.createElement("h3");
    celestialSteam.textContent = "Celestial Steam";
    celestialSteam.classList.add("luxury");
    const celestialSteamState = document.createElement("p");
    celestialSteamState.classList.add("state");
    celestialSteamState.textContent = "Aromatic Vapor Service | $160 per infusion";
    const celestialSteamDescription = document.createElement("p");
    celestialSteamDescription.classList.add("description");
    celestialSteamDescription.textContent = "A warm cascade of curated vapor, released beneath a silver cloche and unveiled tableside. Weightless, enveloping, theatrical.";
    celestialSteamDiv.append(celestialSteam, celestialSteamState, celestialSteamDescription);

    const elementalGrandFlightDiv = document.createElement("div");
    elementalGrandFlightDiv.classList.add("food-item");
    const elementalGrandFlight = document.createElement("h3");
    elementalGrandFlight.innerHTML = 'The Elemental Grand Flight<svg width="64px" height="32px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#00000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8 3L10.5 2.5L11 0H12L12.5 2.5L15 3V4L12.5 4.5L12 7H11L10.5 4.5L8 4V3Z" fill="#355872"></path> <path d="M0 11V10L4 9L5 5H6L7 9L11 10V11L7 12L6 16H5L4 12L0 11Z" fill="#355872"></path> <path d="M1 2L2.5 0.5L4 2L2.5 3.5L1 2Z" fill="#355872"></path> <path d="M15 14L13 12L11 14L13 16L15 14Z" fill="#355872"></path> <path d="M15 10C15.5523 10 16 9.55229 16 9C16 8.44771 15.5523 8 15 8C14.4477 8 14 8.44771 14 9C14 9.55229 14.4477 10 15 10Z" fill="#355872"></path> </g></svg>';
    // elementalGrandFlight.textContent = "The Elemental Grand Flight";
    const elementalGrandFlightState = document.createElement("p");
    elementalGrandFlight.classList.add("luxury");
    elementalGrandFlightState.classList.add("state");
    elementalGrandFlightState.textContent = "All Four Elements | $695 per guest";
    const elementalGrandFlightDescription = document.createElement("p");
    elementalGrandFlightDescription.classList.add("description");
    elementalGrandFlightDescription.textContent = "A guided tasting journey through stillness, sparkle, structure, and vapor. Includes bespoke narration and a keepsake linen napkin embroidered with the Elemental crest";
    elementalGrandFlightDiv.append(elementalGrandFlight, elementalGrandFlightState, elementalGrandFlightDescription);

    menu.append(aquaVitaeDiv, velvetBubblesDiv, polarCubesDiv, celestialSteamDiv, elementalGrandFlightDiv);

    const content = document.getElementById("content");
    content.append(nutritionalInformation, menu);
}