let oreCount = Number(document.getElementById("oreCount").textContent);
const asteroid = document.getElementById("BaseAsteroid");

asteroid.onclick = function() {
    oreCount++;
    document.getElementById("oreCount").textContent = oreCount;

    asteroid.classList.remove("BaseAsteroidClick");
    void asteroid.offsetWidth;
    asteroid.classList.add("BaseAsteroidClick");
};
