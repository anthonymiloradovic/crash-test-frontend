import { useState, useEffect } from "react";
import { ChakraProvider, Box, Text, Image, Heading, Button } from "@chakra-ui/react";
import './cardmain.css';

const cities = [
  "Paris", "Bordeaux", "Lille", "Barcelone", "Berlin", "Londres",
  "Rome", "Madrid", "New York", "Los Angeles", "Tokyo", "Sydney",
  "Rio de Janeiro", "Buenos Aires", "Amsterdam", "Dubai", "Singapour",
  "Shanghai", "Moscou", "Toronto", "Vancouver", "Montréal", "Québec",
  "San Francisco", "Miami", "Mexico", "São Paulo", "Le Caire",
  "Johannesburg", "Istanbul"
];

function CardMain() {
  const [city, setCity] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    document.body.appendChild(script);
    script.addEventListener("load", () => {
      const autocomplete = new window.google.maps.places.Autocomplete(
        document.getElementById("search")
      );
      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const city = place.address_components.find((component) =>
          component.types.includes("locality")
        );
        const region = place.address_components.find((component) =>
          component.types.includes("administrative_area_level_1")
        );
        const country = place.address_components.find((component) =>
          component.types.includes("country")
        );
        if (city && region && country) {
          setCity(`${city.long_name}, ${region.short_name}, ${country.short_name}`);
        }
      });
    });
  }, []);

  useEffect(() => {
    const newCards = Array.from({ length: 30 }, (_, i) => {
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const includeCard = randomCity.toLowerCase().includes(city.toLowerCase());
      return includeCard && (
        <Box
          className="card"
          key={i}
          data-city={randomCity}
          onClick={() => setCity(randomCity)}
          boxShadow="md"
          borderRadius="md"
          p={4}
          cursor="pointer"
          _hover={{
            boxShadow: "lg"
          }}
        >
          <Image
            src="https://mmf.logic-immo.com/mmf/ads/photo-crop-368x250/63b/f/f22a4eaa-dcf2-468d-922a-487915a231c0.jpg"
            alt="Maison"
            objectFit="cover"
            h="60%"
            borderRadius="md"
          />
          <Box mt={4}>
            <Heading as="h5" size="md">Maison Piscine à vendre à  {randomCity} </Heading>
            <Text color="gray.500" fontSize="sm">1 000000 €.</Text>
            <Button colorScheme="blue" size="sm" mt={2}>
              En savoir plus
            </Button>
          </Box>
        </Box>
      );
    });
    setCards(newCards);
  }, [city]);

  return (
    <ChakraProvider>
      <Box>
        <label htmlFor="search">Recherche de ville :</label>
        <input
          type="text"
          id="search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
  
        <Box id="cards-container" display="flex" flexWrap="wrap" justifyContent="center" mt={6}>
          {cards}
        </Box>
      </Box>
    </ChakraProvider>
  );

}

export default CardMain;