import Button from "./Button";

type HeroProps = {
  title: string;
  subtitle: string;
  textLocation: "left" | "right";
  imgLink: string;
  btnLink: string;
  btnText: string;
  btnTransparent: boolean;
};

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  textLocation = "left",
  imgLink,
  btnLink,
  btnText,
  btnTransparent = false,
}) => {
  const textLocationStyle =
    textLocation === "left" ? "md:items-start" : "md:items-end";

  return (
    <div
      className="overflow-hidden bg-cover bg-no-repeat  h-full w-full"
      style={{
        backgroundPosition: "50%",
        backgroundImage: `url(${imgLink})`,
      }}
    >
      <div className="h-full w-full bg-black bg-opacity-20 text-white">
        <div
          className={`${textLocationStyle} flex flex-col gap-10 h-full text-center items-center justify-center px-2 md:mx-28`}
        >
          <h1 className="text-5xl font-bold">{title}</h1>
          <h2 className="text-2xl font-semibold">{subtitle}</h2>
          <div className="w-full md:w-[30%]">
            <Button
              transparent={btnTransparent}
              btnLink={btnLink}
              btnText={btnText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
