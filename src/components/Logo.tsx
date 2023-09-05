import { useConfigStore } from "@/zustand/config.store";
import { Link } from "react-router-dom";

export default function Logo() {
  const { config } = useConfigStore();

  return (
    <Link to="/" className="flex gap-1 text-xl font-semibold items-center">
      <div className="h-[60px] w-[auto]">
        <img
          className="h-full w-full object-contain"
          src={config.logo_link}
          alt={`the logo of ${config.page_name}`}
        />
      </div>
    </Link>
  );
}
