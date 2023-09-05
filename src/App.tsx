import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, Spinner } from "@/components/index";
import { Home, Store, Detail, Cart, Success } from "@/pages/index";
import { useEffect } from "react";
import { getProducts } from "@/services/products.service";
import { getConfig } from "@/services/config.service";
import { useProductStore } from "@/zustand/products.store";
import { useConfigStore } from "@/zustand/config.store";
import { HeadProvider, Title, Link } from "react-head";

function App() {
  const { loadingProducts, setProducts } = useProductStore();
  const { loadingConfig, setConfig, config } = useConfigStore();

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
    getConfig().then((config) => {
      setConfig(config);
    });
  }, []);

  if (loadingProducts || loadingConfig) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <HeadProvider>
        <Title>{config?.page_name}</Title>
        <Link rel="icon" type="image/png/jpg/jpeg" href={config?.logo_link} />
      </HeadProvider>
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Navbar />
        <div className="animate-fade-in grid grid-rows-[auto_1fr_auto] min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store/:category?/:search?" element={<Store />} />
            <Route path="/product/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
