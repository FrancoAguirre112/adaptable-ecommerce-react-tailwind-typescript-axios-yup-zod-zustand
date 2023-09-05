import { Link } from "react-router-dom";
import { useProductStore } from "@/zustand/products.store";

const Categories = () => {
  const { categories } = useProductStore();

  // if (error) {
  //   return <div>{error}</div>;
  // }

  return (
    <div className="flex flex-col gap-4 text-secondary font-[600] lg:min-w-[18rem]">
      {categories?.map((category: string) => (
        <Link
          to={`/store/${category}`}
          key={category}
          className="grid grid-cols-2 text-[1rem] font-bold stroke-secondary transition-all hover:text-black hover:stroke-black"
        >
          <div>{category[0]?.toUpperCase() + category?.slice(1)}</div>
          <div className="flex justify-end ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=""
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 6l6 6l-6 6"></path>
            </svg>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
