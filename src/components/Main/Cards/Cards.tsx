import Card from "./Card";

const cardData = [
  {
    imgSrc: "/images/card1.png",
    label: "NEW",
    title: "SHADOW DRIP",
    description:
      "A sleek, minimalist hoodie with dark tones and subtle reflective accents for an effortless street.",
    price: 199,
    oldPrice: 300,
    rating: 4.5,
    discount: "-60%",
  },
  {
    imgSrc: "/images/card2.png",
    label: "HOT",
    title: "OCEAN WAVE",
    description:
      "Bright and bold hoodie inspired by ocean colors, perfect for making a statement.",
    price: 149,
    oldPrice: 220,
    rating: 4.7,
    discount: "-32%",
  },
  {
    imgSrc: "/images/card3.png",
    label: "LIMITED",
    title: "Black Wox",
    description: "Cool blue tones and wave patterns for a fresh, relaxed look.",
    price: 179,
    oldPrice: 250,
    rating: 4.6,
    discount: "-28%",
  },
  {
    imgSrc: "/images/card4.png",
    label: "SALE",
    title: "FOREST NIGHT",
    description: "Deep green hues and soft fabric for cozy evenings.",
    price: 129,
    oldPrice: 180,
    rating: 4.4,
    discount: "-28%",
  },
];

export default function Cards() {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-0.5">
        {cardData.map((card, idx) => (
          <Card
            key={idx}
            imgSrc={card.imgSrc}
            label={card.label}
            title={card.title}
            description={card.description}
            price={card.price}
            oldPrice={card.oldPrice}
            rating={card.rating}
            discount={card.discount}
          />
        ))}
      </div>
    </div>
  );
}
