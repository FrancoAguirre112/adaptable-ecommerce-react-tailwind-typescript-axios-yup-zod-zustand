import { useConfigStore } from "@/zustand/config.store";
import { Socials } from ".";

export default function Footer() {
  const { config } = useConfigStore();

  return (
    <footer className={`bg-purple-900 py-5 grid grid-cols-2 gap-4 px-2 mt-10`}>
      <div className="space-y-2 text-center w-full">
        <h3 className="text-white font-bold">Follow us!</h3>
        <div className="flex justify-center">
          <Socials bgColor="bg-purple-200" links={config.social_links} />
        </div>
      </div>
      <div className="text-white justify-center flex items-center w-full">
        <p>&copy; {new Date().getFullYear()} {config.page_name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
