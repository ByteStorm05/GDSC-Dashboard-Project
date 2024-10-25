import React from "react";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    title: "Real-time Stock Updates",
    description: "Get instant updates on stock prices to stay informed.",
    image: "/images/dashb.jpg",
    buttonText: "Try Dashboard",
    link: "/dashboard" // Add the path you want this button to link to
  },
  {
    title: "Buy Stocks",
    description: "Purchase Stocks by fetching real prices!",
    image: "/images/buy.jpg",
    buttonText: "Try Buy Shares feature",
    link: "/buystocks" // Add the path here
  },
  {
    title: "Personal Profile",
    description: "Access your purchased stocks at a glance.",
    image: "/images/profile.jpg",
    buttonText: "Visit Profile",
    link: "/profile" // And here
  },
];

const Work: React.FC = () => {
  return (
    <section className="py-8">
      {/* Heading */}
      <h2 className="text-center text-5xl text-gray-800 font-bold mb-20">How Our App Works!</h2>
      
      {/* Cards Container */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-sm md:max-w-md lg:max-w-lg h-auto bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Card Image */}
            <Image
              src={card.image}
              alt={card.title}
              width={400}
              height={250}
              layout="responsive"
              className="object-cover"
            />

            {/* Card Content */}
            <div className="flex-grow p-6 text-center">
              <h3 className="text-2xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-600 mb-6">{card.description}</p>

              {/* Test Feature Button as Link */}
              <Link href={card.link} className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">

                  {card.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
