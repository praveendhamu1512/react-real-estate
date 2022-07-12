import { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  // Array of all House objects
  const sellHouse = [
    {
      name: "Newyork H.No-1",
      url:
        "https://azbigmedia.com/wp-content/uploads/2020/08/selling-home.jpg",
      price: 25
    },

    {
      name: "Newyork H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJs8lcQxZYqE_iIb6B7WUMAKBaG2zn6Xkfw&usqp=CAU",
      price: 25
    },
    {
      name: "Newyork H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnNlDrQSzIzjoo1hxgB9S9ONt7Zkv1I3Rs2Q&usqp=CAU",
      price: 30
    },

    {
      name: "Newyork H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3CLBAEaBdYZaX6fPWZ0slhrbUQOZv5DtYwg&usqp=CAU",
      price: 30
    },

    {
      name: "Newyork H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3g1qUeRYt0p3scv4KAwK1oSK5eq2iy9r9EA&usqp=CAU",
      price: 40
    },
    
    {
      name: "Utah H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU3fLg8g-IWvMO_EtDCmH0Foybzv9vNkyPqw&usqp=CAU",
      price: 25
    },
    {
      name: "Utah H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ecYokSrv7s9xsa_TI2RL12pqE9oHvYy1vg&usqp=CAU",
      price: 30
    },
    {
      name: "Utah H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsWfYf3TtoRBiLVcC0m33Ih9lDs0aka5WcNA&usqp=CAU",
      price: 25
    },
    {
      name: "Utah H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj8lYKv4qPRblPVPOHqELKDAcDBmBUiUu2OQ&usqp=CAU",
      price: 40
    },
    {
      name: "Utah H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmnlMKXw62ATc2D-zr0fqiDlALJ4LmlDPdQ&usqp=CAU",
      price: 40
    },
    {
      name: "Banglore H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbYGP7StabaxttILT1aTqVhRwHedEQem7tDg&usqp=CAU",
      price: 30
    },
    {
      name: "Banglore H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmFFyRp-wNQ0P8ORSGzLKooZjF2HDw28URA&usqp=CAU",
      price: 25
    },
    {
      name: "Banglore H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3Vv6x-X5-yNyV50Hz9_6x4lT72dMZ2XsuA&usqp=CAU",
      price: 25
    },
    {
      name: "Banglore H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeX05iaSV6pYmuzddCphr5AshANp0u5Efazg&usqp=CAU",
      price: 40
    },
    {
      name: "Banglore H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiSQ53b15f_HTHF0u37SSOozpIdtUnhCLxLA&usqp=CAU",
      price: 40
    },

    {
      name: "Hyderabad H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsWS0ZQWXMB85O8XxqYgJG7rx07rXuxAL7wQ&usqp=CAU",
      price: 30
    },
    {
      name: "Hyderabad H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_Uju5llXZ_0PtP69osQ_d7iu9SMgyxdBgwQ&usqp=CAU",
      price: 25
    },
    {
      name: "Hyderabad H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZLFiqcRwqB38IBmXwbhRcGLG1z-6339WnwQ&usqp=CAU",
      price: 25
    },
    {
      name: "Hyderabad H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtzdAxBYckxn_WPJ3scC-_LsvKc63F1KA1yw&usqp=CAU",
      price: 40
    },
    {
      name: "Hyderabad H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAU3nbrVS5uZwJ3RSOwkLuw4dK7x6CBSLow&usqp=CAU",
      price: 40
    },

    {
      name: "Hyderabad H.No-6",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYDDewfsX4PngHGSFKZZQyFB1Db5F3cMdhw&usqp=CAU",
      price: 50
    },
    {
      name: "Mumbai H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFNT6rWylWFnQDvJdLJOAt3-Ys_Kw6h9c2-Q&usqp=CAU",
      price: 30
    },
    {
      name: "Mumbai H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSf274i7mGK0obIOw2qG06vjf0ZhYrulbKQ&usqp=CAU",
      price: 25
    },
    {
      name: "Mumbai H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFj8TJ8X-cV7j4tPW8g9HfaSSsUgDM56CNsA&usqp=CAU",
      price: 25
    },
    {
      name: "Mumbai H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-F8_HCUuP9GQK5rHvP6Hp0gc-5EgvONeR-g&usqp=CAU",
      price: 40
    },
    {
      name: "Mumbai H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-LDkOCsesHZEQ1PGCbnjsRbrrrJEzCKzt8A&usqp=CAU",
      price: 40
    }
    
  ];
  // List of all House satisfing all the filters
  const [filteredList, setFilteredList] = useState(sellHouse);
  // Selected House Location filter
  const [selectedLocation, setSelectedLocation] = useState("");
  // Selected Price filter
  const [selectedPrice, setSelectedPrice] = useState();

  const filterByHouse = (filteredData) => {
    // Avoid filter for empty string
    if (!selectedLocation) {
      return filteredData;
    }

    const filteredHouse = filteredData.filter(
      (House) => House.name.split(" ").indexOf(selectedLocation) !== -1
    );
    return filteredHouse;
  };
  const filterByPrice = (filteredData) => {
    // Avoid filter for null value
    if (!selectedPrice) {

      return filteredData;
    }

    const filteredHouse = filteredData.filter(
      (House) => House.price === selectedPrice
    );
    return filteredHouse;
  };

  // Update seletedBrand state
  const handleHouseChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  // Toggle seletedPrice state
  const handlePriceChange = (event) => {
    const inputPrice = Number(event.target.id);

    if (inputPrice === selectedPrice) {
      setSelectedPrice("");
    } else {
      setSelectedPrice(inputPrice);
    }
  };

  useEffect(() => {
    var filteredData = filterByHouse(sellHouse);
    filteredData = filterByPrice(filteredData);
    setFilteredList(filteredData);
  }, [selectedLocation, selectedPrice]);

  return (
    <div className="App">
      <div className="location-filter">
        <div>Location :</div>
        <select
          id="house-input"
          value={selectedLocation}
          onChange={handleHouseChange}
        >
          <option value="">All</option>
          <option value="Newyork">New york</option>
          <option value="Utah">Utah</option>
          <option value="Banglore">Banglore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Mumbai">Mumbai</option>
        </select>
      </div>
      <div>House Price</div>
      <div id="price-options" onClick={handlePriceChange}>
        <div
          className={selectedPrice === 25 ? "active-option" : "filter-option"}
          id="25"
        >
          25Lakh
        </div>
        <div
          className={selectedPrice === 30 ? "active-option" : "filter-option"}
          id="30"
        >
          30Lakh
        </div>
        <div
          className={selectedPrice === 40 ? "active-option" : "filter-option"}
          id="40"
        >
          40Lakh
        </div>
        <div
          className={selectedPrice === 50 ? "active-option" : "filter-option"}
          id="50"
        >
          50Lakh
        </div>
      </div>

      <div id="house-list">
        {filteredList.map((item, index) => (
          <div className="house-item" key={index}>
            <h5>{`Location: ${item.name}`}</h5>
            <h5 className="">{`Lakh: ${item.price}`}</h5>
            <img className="house-image" src={item.url} alt="house-img" />
          </div>
        ))}
      </div>
    </div>
  );
}