import { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  // Array of all House objects
  const buyHouse = [
    {
      name: "Newyork H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp6I3gJHJiBBb-7DYAIPazLmc1wBrrGIC9cg&usqp=CAU",
      price: 25
    },

    {
      name: "Newyork H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHYbw89IgKdrWZtgGRSjMxMxKdGSn8p1vqXg&usqp=CAU",
      price: 25
    },
    {
      name: "Newyork H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgYRbPhYNY-6DavP9_BOm0v7b8_AwOIKCRCw&usqp=CAU",
      price: 30
    },

    {
      name: "Newyork H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFDPmK-aei1PnNwzUnPc3inofqdHJkAhbBQ&usqp=CAU",
      price: 30
    },

    {
      name: "Newyork H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHV4tC3XQF3TSzcXbwPxOwTa3O_PaSptPuXg&usqp=CAU",
      price: 40
    },
    
    {
      name: "Utah H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRVLSFcd0cwV6EIby5iE9QkYygYvrmr0SNCg&usqp=CAU",
      price: 25
    },
    {
      name: "Utah H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxZHoeLLZIKpsyIQv0dP1ciFI-XUl9D4y9Q&usqp=CAU",
      price: 30
    },
    {
      name: "Utah H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKF35giXM0zQ2CrZvRiW6xQRBvLeqqOn4Hzg&usqp=CAU",
      price: 25
    },
    {
      name: "Utah H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3klQ77eh3gL0DjVGMmIL2bPeYS4Iod3MFvw&usqp=CAU",
      price: 40
    },
    {
      name: "Utah H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbz6cs3VstixhdJPaDWntk6PiPJeJfKjQJ0w&usqp=CAU",
      price: 40
    },
    {
      name: "Banglore H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDm2vRD6VUv7j7YG7JH8bl_YKnj_RFcGXaJQ&usqp=CAU",
      price: 30
    },
    {
      name: "Banglore H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbyIzZGsQjlRjNCQEu1dJzqS0FTqWxMTS9Rg&usqp=CAU",
      price: 25
    },
    {
      name: "Banglore H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcQpwxBWJhPf5ftTms3v6tKh4y1K5W2HZRA&usqp=CAU",
      price: 25
    },
    {
      name: "Banglore H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4n2iQ8T3s3JMDy5FQUpNNYwPPvuV4vV_Oeg&usqp=CAU",
      price: 40
    },
    {
      name: "Banglore H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29_GVWor-snA80uoqZorTF8pBf13JJ5dZWg&usqp=CAU",
      price: 40
    },

    {
      name: "Hyderabad H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4rn49vPINPTvlV9gCVoeGonw6EP4tM0QMQ&usqp=CAU",
      price: 30
    },
    {
      name: "Hyderabad H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgFaMHfn02Fg5Y1InHybopMwOLPEUFYK_Wsw&usqp=CAU",
      price: 25
    },
    {
      name: "Hyderabad H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4a4ffnyDtxgOTe5C_rjZrgfqQk29AcsS6jw&usqp=CAU",
      price: 25
    },
    {
      name: "Hyderabad H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-LDkOCsesHZEQ1PGCbnjsRbrrrJEzCKzt8A&usqp=CAU",
      price: 40
    },
    {
      name: "Hyderabad H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSElQPoFXSFQ5wJSPdEbYVXx3klRnLg_9_xPw&usqp=CAU",
      price: 40
    },

    {
      name: "Hyderabad H.No-6",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkTjS4A5ZLzWFTkhDymnEw_zglmwTIiu2ppw&usqp=CAU",
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfYOFVO6UyUnJbKh7yO3kL7XtIlKqIPzTo5Q&usqp=CAU",
      price: 25
    },
    {
      name: "Mumbai H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGfGmwWlGf54VPqh0DdLmFe_GJsYLh20VI2Q&usqp=CAU",
      price: 25
    },
    {
      name: "Mumbai H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iq76WYnIYDZAEMnB2KRw8_ITmHQMLXPNnw&usqp=CAU",
      price: 40
    },
    {
      name: "Mumbai H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iq76WYnIYDZAEMnB2KRw8_ITmHQMLXPNnw&usqp=CAU",
      price: 40
    }
    
  ];
  // List of all House satisfing all the filters
  const [filteredList, setFilteredList] = useState(buyHouse);
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
    var filteredData = filterByHouse(buyHouse);
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