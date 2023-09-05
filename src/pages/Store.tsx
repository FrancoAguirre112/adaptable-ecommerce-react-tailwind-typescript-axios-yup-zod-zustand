import ProductList from "../components/ProductList";
import Filters from "../components/Filters";
import Modal from "../components/Modal";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import filterIcon from "../assets/icons/filter.svg";
import { useState } from "react";

function Store() {
  const { search, category = "all" } = useParams<{
    search?: string;
    category?: string;
  }>();
  const searchTerm = search ?? "";
  const categoryTerm = category ?? "all";

  const navigate = useNavigate();

  const handleClearFilter = () => {
    navigate("/store/all");
  };

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const handleClick = () => {
    setIsFiltersOpen(!isFiltersOpen);
  };

  return (
    <>
      <div className="animate-fade-in flex gap-12 justify-items-center justify-center mx-4 lg:mx-24">
        <div className="hidden justify-end lg:flex lg:flex-col-reverse items-end">
          <div className="w-full">
            <Filters />
          </div>
        </div>

        <div className="text-xl flex flex-col gap-11 mt-9">
          <div className="flex justify-between items-center border-[1px] rounded-lg py-2 px-4">
            <h1 className="font-semibold text-[#3F4646] pr-4 w-full">
              {categoryTerm === "all"
                ? "New Arrivals"
                : categoryTerm[0].toUpperCase() + categoryTerm.slice(1)}
            </h1>

            <button
              onClick={handleClick}
              className="flex justify-center items-center text-xl h-full w-full font-semibold text-secondary border-l-[1px] lg:hidden"
            >
              <h1>Filter</h1>
              <img src={filterIcon} alt="filters" />
            </button>

            {categoryTerm !== "all" && (
              <button
                className="text-sm border-l-[1px] pl-4 text-[#3F4646] h-full w-full hover:underline"
                onClick={handleClearFilter}
              >
                (Clean filters)
              </button>
            )}
          </div>
          <div className=" flex justify-start">
            <ProductList search={searchTerm} category={categoryTerm} />
          </div>
        </div>
      </div>

      <Modal open={isFiltersOpen} onClose={handleClick}>
        <div onClick={handleClick}>
          <Filters />
        </div>
      </Modal>
    </>
  );
}

export default Store;
