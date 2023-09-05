import Button from "./Button";

type CardProps = {
  title: string;
  subtitle: string;
  textLocation: "left" | "right";
  imgLink: string;
  btnLink: string;
  btnText: string;
  btnTransparent: boolean;
};

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  textLocation = "left",
  imgLink,
  btnLink,
  btnText,
  btnTransparent = false,
}) => {
  const textLocationStyle =
    textLocation === "left" ? "lg:items-start" : "lg:items-end";

  return (
    <div
      className={`overflow-hidden bg-cover bg-no-repeat h-full rounded-lg`}
      style={{
        backgroundPosition: "50%",
        backgroundImage: `url(${imgLink})`,
      }}
    >
      <div className="h-full w-full bg-black bg-opacity-20 text-white">
        <div
          className={`${textLocationStyle} flex flex-col gap-2 h-full items-center justify-center text-center px-2 lg:mx-8`}
        >
          <h1 className="text-2xl font-bold">{title}</h1>
          <h2 className="text-md font-bold">{subtitle}</h2>
          <div className="w-full mt-12 lg:w-[50%]">
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

export default Card;
