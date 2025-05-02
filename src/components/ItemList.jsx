import { IMG_CDN_URL } from "../utils/constants.js";

const ItemList = ({ items }) => {
  //   console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between gap-2 m-2 p-2  border-b-2 border-gray-300"
        >
          <div className="w-[450px] h-[174px] py-4 flex flex-col gap-1">
            <span className="font-semibold text-[18px] leading-[22px] tracking-[-0.45] text-[rgba(2,6,12,0.75)]">
              {item.card.info.name}
            </span>
            <span className="font-bold">
              - ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
            </span>
            <p className="font-semibold text-[16px] leading-[21px] tracking-[-0.4px] text-[rgba(2,6,12,0.6)]">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-[156px] h-[144px]">
            <div className="absolute mx-5 mt-30 w-30 h-10">
              <button className="w-full p-2 bg-white shadow-lg rounded-lg cursor-pointer  hover:bg-gray-100 font-semibold text-[18px] text-[rgb(27,166,114)]">
                ADD
              </button>
            </div>
            <img
              className="h-full  w-full rounded-lg"
              src={IMG_CDN_URL + item.card.info.imageId}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
