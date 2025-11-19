let produits = [
  { nom: "PC portable", prix: 900, image: "pc.jpg" },
  { nom: "Clavier mécanique", prix: 45, image: "clavier.jpg" },
  { nom: "Souris sans fil", prix: 25, image: "souré.jpg" }
];

let catalogue = document.getElementById("catalogue");

produits.forEach(p => {
  let carte = document.createElement("div");
  carte.className = "carte";
  carte.innerHTML = `
    <img src="${p.image}" alt="${p.nom}">
    <h3>${p.nom}</h3>
    <p>Prix : ${p.prix} €</p>
  `;
  catalogue.appendChild(carte);
});
