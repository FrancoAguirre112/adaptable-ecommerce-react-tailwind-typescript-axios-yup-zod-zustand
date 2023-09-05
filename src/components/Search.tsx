import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import searchIcon from "../assets/icons/search.svg";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Alert from "./Alert";

const searchSchema = z.object({
  search: z
    .string()
    .regex(/^(?!\d+$).*/, "Can't search for a product with only a number")
    .nonempty("Can't search for an empty product"),
});

type SearchFormValues = z.infer<typeof searchSchema>;

const Search = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: SearchFormValues) => {
    const validationResult = await searchSchema.safeParse(data);

    if (validationResult.success) {
      navigate(`/store/all/${data.search}`);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="p-2 rounded-lg pl-10 bg-gray-200 w-full"
          {...register("search")}
        />
        <div className="absolute inset-y-0 left-2 pl-2 flex items-center pointer-events-none">
          <img src={searchIcon} alt="Search" className="w-4 h-4" />
        </div>
      </div>
      {errors.search && (
        <Alert severity="error" message={errors.search.message || "Error"} />
      )}
    </form>
  );
};

export default Search;
