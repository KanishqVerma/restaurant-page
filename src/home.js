"use strict"

export function createHomePage(){
    const content = document.getElementById("content");

    const h2 = document.createElement("h2");
    h2.classList.add("luxury");
    h2.textContent = "We serve Water with a touch of Luxury!";

    const aboutUs1 = document.createElement("p");
    aboutUs1.textContent = "Hidden behind a brushed-gold façade in a quiet cultural district, this is a temple to the world's most elemental luxury: water. There is no wine list, no cocktails, no small plates—only a meticulously curated collection of the planet's rarest and most expressive waters, each presented with the reverence of a grand cru."

    const aboutUs2 = document.createElement("p");
    aboutUs2.textContent = "Guests enter through a hushed atrium where a sculptural cascade flows down a wall of hand-carved onyx. The dining room is spare and luminous—soft alabaster lighting, velvet banquettes in deep sapphire, tables carved from a single slab of Carrara marble. The air is subtly humidified to heighten aroma and mouthfeel, and the soundscape is a gentle chorus of distant springs and glacial calving."


    const aboutUs3 = document.createElement("p");
    aboutUs3.textContent = "Service begins with a “terroir consultation.” Water sommeliers—trained in mineralogy and sensory analysis—guide guests through distinctions of source, elevation, aquifer depth, and total dissolved solids. A tasting might begin with a delicate Tasmanian rainwater, silken and ephemeral, followed by a bright Icelandic glacial melt with a crystalline snap, then a velvety artesian water drawn from a centuries-old French aquifer, rich with calcium and a lingering, chalky finish."


    const aboutUs4 = document.createElement("p");
    aboutUs4.textContent = "Each pour arrives in bespoke stemware designed to accentuate structure and effervescence. Still waters are decanted to awaken dissolved gases; sparkling selections are opened tableside with a quiet ceremonial flourish. Temperature is calibrated to the tenth of a degree to reveal nuance—cool for minerality, slightly warmer for roundness and bloom."


    const aboutUs5 = document.createElement("p");
    aboutUs5.textContent = "Pairings are textural rather than culinary: hand-chiseled ice spheres of varying density, mineral salts presented on mother-of-pearl spoons to amplify sweetness, and scent domes that release fleeting notes of wet stone or alpine air. A signature “Vertical of Time” offers the same spring’s water bottled across three decades, demonstrating the subtle evolution of aquifer character."

    const aboutUs6 = document.createElement("p");
    aboutUs6.textContent = "The experience concludes in the Reflection Lounge, where guests receive a leather-bound tasting ledger embossed with their personalized mineral profile. At Aureum Still, luxury is distilled to its purest expression—proof that even the simplest element, when treated with devotion and discernment, can become transcendent."

    aboutUs1.classList.add("home-content");
    aboutUs2.classList.add("home-content");
    aboutUs3.classList.add("home-content");
    aboutUs4.classList.add("home-content");
    aboutUs5.classList.add("home-content");
    aboutUs6.classList.add("home-content");


    content.append(h2, aboutUs1, aboutUs2, aboutUs3, aboutUs4, aboutUs5, aboutUs6);
}