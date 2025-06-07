<script>
  const form = document.getElementById("opportunity-form");
  const opportunityList = document.getElementById("opportunities-list");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page refresh

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const location = document.getElementById("location").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;

    // Create the opportunity card
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${title}</h3>
      <p> ${location}</p>
      <p> ${date}</p>
      <p> Category: ${category}</p>
      <p>${description}</p>
    `;

    opportunityList.appendChild(card);
    form.reset();
  });
</script>

