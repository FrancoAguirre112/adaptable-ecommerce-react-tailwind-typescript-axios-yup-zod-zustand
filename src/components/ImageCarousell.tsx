import { useState } from "react";
import Carrousel from "./Carrousel";

type ImageCarouselProps = {
  images: string[] | undefined;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    images?.[0]
  );

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const uniqueImages = new Set(images);

  const thumbnailContent = Array.from(uniqueImages).map((image, index) => (
    <div
      key={index}
      className={`w-16 h-16 mb-2 rounded-lg cursor-pointer ${
        selectedImage === image ? "border-[1px] border-zinc-400 p-[1px]" : ""
      }`}
    >
      <img
        src={image}
        alt={`Thumbnail ${index}`}
        className="w-full h-full object-cover rounded-lg"
        onClick={() => handleImageClick(image)}
      />
    </div>
  ));

  return (
    <>
      <div className="hidden lg:flex lg:items-center">
        <div className="mr-4">{thumbnailContent}</div>
        <div>
          <img
            src={selectedImage}
            alt="Selected"
            className="min-w-[25rem] max-w-[25rem] h-[43rem] object-cover"
          />
        </div>
      </div>

      <div className="lg:hidden w-full">
        <Carrousel
          content={Array.from(uniqueImages).map((prodImg) => (
            <div
              className="overflow-hidden bg-cover bg-no-repeat  h-[500px] w-full"
              style={{
                backgroundPosition: "50%",
                backgroundImage: `url(${prodImg})`,
              }}
            />
          ))}
        />
      </div>
    </>
  );
};

export default ImageCarousel;
