import { serviceProp } from "@/interfaces/interface";
import Image from "next/image";

const  ServiceCard = ({imgUrl, header, description}: serviceProp) => {
  return (
    <div  className="custom-card group">
      <div className="h-65 relative overflow-hidden rounded-t-4xl">
        <Image
          src={imgUrl}
          fill
          className="image-hover"
          alt={header}
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-4 p-5 font-montserrat">
        <p className="font-semibold text-lg text-light-dark">{header}</p>
        <p className="text-grey">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
