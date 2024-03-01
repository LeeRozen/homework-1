function loginAsVisitor(visitorName) {
  // תממשו את הלוגיקה של בחירת אורח שנכנס לגן החיות
  // שמרו את האורח שבחרתם, בלוקל סטורג' כך שבכל העמודים נדע מי האורח הנוכחי
}

const visitorsData = [
  { name: "John Doe", coins: 100, imgSrc: "https://via.placeholder.com/150" },
  { name: "Jane Smith", coins: 75, imgSrc: "https://via.placeholder.com/150" },
  // Add more visitors as needed
];

function showVisitorCards() {
  const visitorCardsContainer = document.getElementById("visitor-cards");

  visitors.forEach(visitor => {
      const card = document.createElement("div");
      card.classList.add("visitor-card");
      const img = document.createElement("img");
      img.src = "https://via.placeholder.com/150";
      img.alt = "visitor Photo";

      const name = document.createElement("p");
      name.textContent = visitor.name;

      const coins = document.createElement("p");
      coins.textContent = `Coins: ${visitor.coins}`;

      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(coins);

      card.addEventListener("click", () => {
          // Implement logic for selecting a visitor and proceeding with the game
          alert(`Selected ${visitor.name}`);
      });

      visitorCardsContainer.appendChild(card);
  });
}

// Call the function to display visitor cards when the page loads

window.addEventListener("load",showVisitorCards());
/**
window.onload = showVisitorCards;
 */