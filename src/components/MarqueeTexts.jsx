import MarqueeText from "react-marquee-text"

const MarqueeTexts = ({ products }) => {
  return (
    <div  className="bg-base-300" >
      <MarqueeText direction="right" duration={10}>
      {products?.map((product) => (
        <div key={product?._id}>
            <p  className="mr-4">●{product?.name}</p>
        </div>
      ))}
      </MarqueeText>
    </div>
  );
};

export default MarqueeTexts;
