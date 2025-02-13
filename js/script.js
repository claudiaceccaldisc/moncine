document.addEventListener("DOMContentLoaded", function() {
    // Charger le header
    fetch('header.html')
      .then(response => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement du header");
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('header').innerHTML = data;
      })
      .catch(error => console.error(error));
  
    // Charger le footer
    fetch('footer.html')
      .then(response => {
        if (!response.ok) {
          throw new Error("Erreur lors du chargement du footer");
        }
        return response.text();
      })
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      })
      .catch(error => console.error(error));
  });
  