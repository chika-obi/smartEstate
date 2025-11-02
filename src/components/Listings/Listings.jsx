// components/Listings.jsx
import React, { useState } from "react";
import "./Listings.css";

const allListings = [
  {
    title: "Modern Family House",
    location: "Lagos, Nigeria",
    price: 120000,
    type: "House",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Luxury Apartment",
    location: "London, UK",
    price: 350000,
    type: "Apartment",
    image:
      "https://images.unsplash.com/photo-1580584123585-9d77b1488f3d?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Prime Land Plot",
    location: "Port Harcourt, Nigeria",
    price: 80000,
    type: "Land",
    image:
      "https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=800&q=80",
  },
  // Add more listings as needed
];

const Listings = () => {
  const [filterLocation, setFilterLocation] = useState("");
  const [filterType, setFilterType] = useState("");
  const [searchPrice, setSearchPrice] = useState("");

  const filteredListings = allListings.filter((listing) => {
    return (
      (filterLocation === "" || listing.location.includes(filterLocation)) &&
      (filterType === "" || listing.type === filterType) &&
      (searchPrice === "" || listing.price <= parseInt(searchPrice))
    );
  });

  return (
    <section id="listings" className="listings">
      <h2>Property Listings</h2>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Filter by Location"
          value={filterLocation}
          onChange={(e) => setFilterLocation(e.target.value)}
        />
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="">All Types</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Land">Land</option>
        </select>
        <input
          type="number"
          placeholder="Max Price"
          value={searchPrice}
          onChange={(e) => setSearchPrice(e.target.value)}
        />
      </div>

      {/* Listings Grid */}
      <div className="listings-grid">
        {filteredListings.map((listing, index) => (
          <div key={index} className="listing-card">
            <div className="listing-image">
              <img src={listing.image} alt={listing.title} />
            </div>
            <div className="listing-info">
              <h3>{listing.title}</h3>
              <p className="location">{listing.location}</p>
              <p className="price">${listing.price.toLocaleString()}</p>
              <p className="type">{listing.type}</p>
              <button className="btn-primary">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Listings;
