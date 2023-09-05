import Categories from "../components/Categories";
import filterIcon from "../assets/icons/filter.svg";

const Filters = () => {
  return (
    <div className="flex flex-col border-x-[1px] border-b-[1px] rounded-b-lg h-fit">
      <div className="flex justify-between text-xl font-semibold text-secondary border-b-[1px] p-4">
        <h1>Filter</h1>
        <img src={filterIcon} alt="filters" />
      </div>
      <div className="p-6">
        <Categories />
      </div>
    </div>
  );
};

export default Filters;
