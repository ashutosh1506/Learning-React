import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  //   console.log(data);

  return (
    <div>
      {/* Header */}
      <div className="mx-auto my-4 p-4  bg-white  ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* Accordian Body */}
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
