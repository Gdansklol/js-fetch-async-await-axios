// fetch api

fetch("ica.json") // Kontrollera att sökvägen är rätt
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP-fel! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data hämtad:", data);
  })
  .catch((err) => {
    console.error("Hämtning misslyckades:", err);
  });
