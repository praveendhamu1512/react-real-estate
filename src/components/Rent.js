import { useEffect, useState } from "react";
import "./style.css";

export default function App() {
  // Array of all House objects
  const rentHouse = [
    {
      name: "Newyork H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOhFINEWJ5TAuuzmuMTRoIeCy97BJh7J_-Q&usqp=CAU",
      price: 10
    },

    {
      name: "Newyork H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghvhoZTaHatMKMSbXKsYuC9IA0ujTWQLkHQ&usqp=CAU",
      price: 12
    },
    {
      name: "Newyork H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbokf4gtzX6MrNMGzIuc0BWuG2V3q0i9P_KQ&usqp=CAU",
      price: 10
    },

    {
      name: "Newyork H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7yydIVYzw0Z4Ow1yaqN61HJUtXhWptc-_1g&usqp=CAU",
      price: 15
    },

    {
      name: "Newyork H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tDn-Vr-9FuFEq3fdkcw_t5IBcNP-maYRSw&usqp=CAU",
      price: 20
    },
    
    {
      name: "Utah H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg7rq1zNh3GS7ScBinx3wyEl3tX6m2ZK5n1g&usqp=CAU",
      price: 12
    },
    {
      name: "Utah H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBZUOy1r89pH92kDXZ24OSPZEdB1yxb1mSHQ&usqp=CAU",
      price: 15
    },
    {
      name: "Utah H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VJMKzaJnTkuU7_pYC7A_LOws924641GROQ&usqp=CAU",
      price: 10
    },
    {
      name: "Utah H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJPAIAXUVMca2RzgyQybcmZNA93ODnRrzMMg&usqp=CAU",
      price: 20
    },
    {
      name: "Utah H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTmnlMKXw62ATc2D-zr0fqiDlALJ4LmlDPdQ&usqp=CAU",
      price: 12
    },
    {
      name: "Banglore H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS8QO7013u1aLScuEL4qhywpZLBrL5bkI0TA&usqp=CAU",
      price: 10
    },
    {
      name: "Banglore H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrM_0EO3cdy7IGDgiwhjHTDj3ns2uzJUHKOw&usqp=CAU",
      price: 12
    },
    {
      name: "Banglore H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKVEUghYoONiSWbftVy_5Y835Fwwpjox5uw&usqp=CAU",
      price: 20
    },
    {
      name: "Banglore H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3SAK81GvtiaZvmEtgxWrOw8Dm6NhFL4nZHA&usqp=CAU",
      price: 12
    },
    {
      name: "Banglore H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIoqziM9zRvtFywI4QTcmSRjJFWbOtz6k9NQ&usqp=CAU",
      price: 15
    },

    {
      name: "Hyderabad H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTCVra8c5mdVpaE9d7EmSbiKAv-ma0kw2qfg&usqp=CAU",
      price: 20
    },
    {
      name: "Hyderabad H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mvQFRhBDC0x0UacjXv4X97Fd8pdghRgtqw&usqp=CAU",
      price: 12
    },
    {
      name: "Hyderabad H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrXro7wVoPMa6SOyQbpLc2wVLuKxOGz3oNA&usqp=CAU",
      price: 15
    },
    {
      name: "Hyderabad H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1mwmoIodWE13zFhxkS1_-0fQHA7idIJfoQ&usqp=CAU",
      price: 10
    },
    {
      name: "Hyderabad H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwz_fxjNfeHagkTN3DnRZez3Wrq75bt6DZmg&usqp=CAU",
      price: 15
    },

    {
      name: "Hyderabad H.No-6",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStFNJwphRTZaTZTpzUhNfYHjKlr2fc-niadA&usqp=CAU",
      price: 20
    },

    {
      name: "Mumbai H.No-1",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1B3Qwa7cNsqOwJEfU0HysPXzg0ijF35J8rA&usqp=CAU",
      price: 10
    },
    {
      name: "Mumbai H.No-2",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjggwqA_xUJbDyjQGEPIQJO6r1oguSkMQ2NQ&usqp=CAU",
      price: 20
    },
    {
      name: "Mumbai H.No-3",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdRDiPImRO0pqNoTXBnKuaWarsJjPa9SIaUw&usqp=CAU",
      price: 15
    },
    {
      name: "Mumbai H.No-4",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9O5hCSR8wXd_1zYvJyRjk3T6Hix_6OPB2aA&usqp=CAU",
      price: 10
    },
    {
      name: "Mumbai H.No-5",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-exQOY5UIeqKLexDU3lm1vXJl-CgNR-pRxg&usqp=CAU",
      price: 20
    }
    
  ];
  // List of all House satisfing all the filters
  const [filteredList, setFilteredList] = useState(rentHouse);
  // Selected House Location filter
  const [selectedLocation, setSelectedLocation] = useState("");
  // Selected Price filter
  const [selectedPrice, setSelectedPrice] = useState();

  const filterByLocation = (filteredData) => {
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
    var filteredData = filterByLocation(rentHouse);
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
      <div>House Rent Price</div>
      <div id="price-options" onClick={handlePriceChange}>
        <div
          className={selectedPrice === 10 ? "active-option" : "filter-option"}
          id="10"
        >
          10k
        </div>
        <div
          className={selectedPrice === 12 ? "active-option" : "filter-option"}
          id="12"
        >
         12K
        </div>
        <div
          className={selectedPrice === 15 ? "active-option" : "filter-option"}
          id="15"
        >
          15k
        </div>
        <div
          className={selectedPrice === 20 ? "active-option" : "filter-option"}
          id="20"
        >
          20k
        </div>
      </div>

      <div id="house-list">
        {filteredList.map((item, index) => (
          <div className="house-item" key={index}>
            <h5>{`Location: ${item.name}`}</h5>
            <h5 className="">{`Thousands: ${item.price}`}</h5>
            <div>
            <img className="house-image" src={item.url} alt="house-img" />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}