import './styles/VendorsPageStyles.css';
import React from "react";
import { FaLeaf, FaBreadSlice } from "react-icons/fa"; // Example icons for dietary restrictions
import NavigationBar from './NavigationBar';

const Vendors = () => {
  // data for vendors, including URLs for their sites
  const vendors = [
    {
      id: 1,
      name: "Little Eva's",
      description:
        "Little Eva's features classic grilled fare like hamburgers, brats, crispy codfish sandwiches, vegan spring rolls, homemade baked goods, and more, along with an extensive drink menu (both alcoholic & non-alcoholic)",
      image:
        "https://gov-island-site.s3.amazonaws.com/pages/_foodVendors2x/little-evas-fish-chips-cropped.png", // Placeholder for restaurant image
      dietary: ["Vegan", "Gluten-Free"],
      url: "https://www.littleevas.com/",
    },
    {
      id: 2,
      name: "Joe Coffee",
      description:
        "Roasting 100% of its own beans in Long Island City, Joe Coffee is New York's hometown roaster. Here on Governors Island, they're serving up their delicious coffee alongside teas, and baked treats. Make sure to stop by on your way over to the Island for seasonal lattes, Coldstretto cold brew espresso, breakfast tacos, and more.",
      image:
        "https://gov-island-site.s3.amazonaws.com/food/_foodVendors2x/joecoffee_Catering-Block2.jpg",
      dietary: ["Gluten-Free"],
      url: "https://joecoffeecompany.com/",
    },
    {
      id: 3,
      name: "Taco Vista",
      description:
        "Enjoy tasty tacos with in a scenic setting at the aptly named Taco Vista! If you’re thirsty, pair your tacos with a beer or an expertly mixed margarita, sit back, and enjoy the view.",
      image:
        "https://gov-island-site.s3.amazonaws.com/pages/_foodVendors2x/taco-vista-cropped.jpg",
      dietary: ["Organic", "Gluten-Free"],
      url: "https://www.tacovista.co/",
    },
  ];

  return (
    <div className='main-content'>    
    <div className="vendors-container">
      <header className="vendors-header">
        <h2>Vendors</h2>
      </header>
      {vendors.map((vendor) => (
        <div key={vendor.id} className="vendor-card">
          {/* Restaurant Image */}
          <img src={vendor.image} alt={vendor.name} className="vendor-image" />

          {/* Vendor Info */}
          <h3>{vendor.name}</h3>
          <p>{vendor.description}</p>

          {/* Dietary Restriction Icons */}
          <div className="dietary-icons">
            {vendor.dietary.includes("Vegan") && (
              <FaLeaf className="dietary-icon" title="Vegan" />
            )}
            {vendor.dietary.includes("Gluten-Free") && (
              <FaBreadSlice className="dietary-icon" title="Gluten-Free" />
            )}
            {/* Add more icons for other dietary restrictions */}
          </div>

          {/* View Menu Button with Link */}
          <a href={vendor.url} target="_blank" rel="noopener noreferrer">
            <button className="view-menu-button">View Menu</button>
          </a>
        </div>
      ))}
      <NavigationBar />
      </div>
    </div>
  );
};

export default Vendors;
