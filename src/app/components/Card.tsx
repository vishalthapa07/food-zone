"use client";

type TCard = {
  image: string;
  title: string;
  description: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const Card = ({ image, title, description, onMouseEnter }: TCard) => {
  return (
    <section>
      <div className="flex justify-end">
        <div
          onMouseEnter={onMouseEnter}
          className="w-[507px] hover:lg:w-[607px] h-auto lg:h-[158px] flex items-center rounded-l-full p-2 md:p-6 z-20 bg-white1 hover:bg-orange1 text-lightBlack hover:text-white1 cursor-pointer transition-all duration-300 ease-in-out"
        >
          <div>
            <img src={image} alt="food-item" />
          </div>
          <div className="ml-2 md:ml-10">
            <h1 className="uppercase font-bold text-xl">{title}</h1>
            <p className="text-sm mt-2 w-[200px]">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
