import React from 'react';

const destinations = [
    { name: "Dubai", img: "/images/—Pngtree—the skyline in dubai with_3621860.jpg", desc: "Experience the luxury and modern marvels of Dubai." },
    { name: "Makkah", img: "/images/makkah.jpg", desc: "Perform Umrah with our specialized packages." },
    { name: "India", img: "/images/brand png/vecteezy_summer-vacation-nature-travel-beautiful-summer-landscape_6684243.JPG", desc: "Explore the diverse culture and beauty of India." },
    { name: "Georgia", img: "/images/GIORGIA.jpg", desc: "Discover the hidden gem of the Caucasus." },
    { name: "Azerbaijan", img: "/images/AZERBIJAN.jpg", desc: "Where East meets West." },
     { name: "Bahrain", img: "/images/BAHRAIN.jpg", desc: "The pearl of the Gulf." }
];

const Destinations = () => {
    return (
        <div className="container mt-5">
            <h1>Popular Destinations</h1>
            <p>Explore our top picked destinations for your next vacation.</p>
            <div className="row mt-4">
                {destinations.map((dest, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100">
                             {/* Fallback image if specific one doesn't load/exist, but using what we saw in directory */}
                            <img src={dest.img} className="card-img-top" alt={dest.name} style={{height: '200px', objectFit: 'cover'}} 
                                onError={(e) => {e.target.onerror = null; e.target.src="/images/flight.jpg"}} 
                            />
                            <div className="card-body">
                                <h5 className="card-title">{dest.name}</h5>
                                <p className="card-text">{dest.desc}</p>
                                <button className="btn btn-primary" style={{backgroundColor: 'black', border: 'none'}}>View Packages</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destinations;
