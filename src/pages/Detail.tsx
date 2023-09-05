import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ImageCarousel from "../components/ImageCarousell";
import Icon from "../components/Icon";
import creditCard from "../assets/icons/creditCard.svg";
import star from "../assets/icons/star.svg";
import truck from "../assets/icons/truck.svg";
import repeat from "../assets/icons/repeat.svg";
import AddToCartBtn from "../components/addToCartBtn";
import Section from "../components/Section";
import Recommended from "../components/Recommended";
import { Link } from "react-router-dom";
import { useProductStore } from "@/zustand/products.store";
import { ProductType } from "@/types";

function Detail() {
  const { products, loadingProducts } = useProductStore();
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    setProduct(products[Number(id) - 1]);
  }, [id]);

  if (loadingProducts) {
    return <Spinner />;
  }

  if (!product) {
    return (
      <div className="animate-fade-in flex flex-col items-center justify-center text-center mx-4 lg:mx-24">
        <h1>
          The product you tried to reach does not exist, please search another
          one.
        </h1>

        <Link
          to="/store"
          className={`w-full lg:w-[50%] mt-6 bg-main flex items-center justify-center text-lg text-white px-10 py-3 gap-3 font-semibold rounded-lg hover:scale-110 transition-transform`}
        >
          <button className="flex items-center gap-2">Shop</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="animate-fade-in mx-4 md:mx-24">
        {product && (
          <div className="flex-row lg:flex gap-12">
            <div className="mx-[-1rem]">
              <ImageCarousel images={product.images} />
            </div>

            <div>
              <div>
                <h2 className="text-icon font-medium text-lg mt-6 mb-7">
                  {product.category[0].toUpperCase() +
                    product.category.slice(1)}
                </h2>
                <h1 className="text-[#3C4242] font-semibold text-3xl">
                  {product.name}
                </h1>
                <div className="flex items-center gap-6 mt-[2.5rem] justify-center lg:justify-left">
                  <AddToCartBtn product={product} />
                  <div className="border-[#3C4242] border-[1px] rounded-lg px-10 py-3">
                    <h1 className="font-semibold text-lg text-[#3C4242]">
                      ${product.price}
                    </h1>
                  </div>
                </div>
              </div>

              <hr className="my-6" />

              {/* Description */}

              <Section title="Description">
                <div className="mt-4">
                  <p>{product.description}</p>
                </div>
              </Section>

              <hr className="my-6" />

              {/* Assurances */}

              <div className="grid grid-cols-2 gap-5 justify-items-left">
                <div className="flex items-center gap-3">
                  <Icon iconLink={creditCard} />
                  <h2 className="text-icon font-medium text-md">
                    Secure Payment
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <Icon iconLink={star} />
                  <h2 className="text-icon font-medium text-md">Fit for You</h2>
                </div>
                <div className="flex items-center gap-3">
                  <Icon iconLink={truck} />
                  <h2 className="text-icon font-medium text-md">
                    Free Shipping
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <Icon iconLink={repeat} />
                  <h2 className="text-icon font-medium text-md">
                    Free Returns
                  </h2>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recomendations */}
        {products.filter((p) => p.category === product.category).length > 1 && (
          <div className="mt-16">
            <Section title="Similar Products">
              <div className="mt-4">
                <Recommended product={product} />
              </div>
            </Section>
          </div>
        )}
      </div>
    </>
  );
}

export default Detail;
