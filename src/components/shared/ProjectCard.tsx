import { projectCardProp } from "@/interfaces/interface";

const ProjectCard = ({
  header,
  description,
  clientName,
  scope,
}: projectCardProp) => {
  return (
    <div className="custom-card group">
      <div className="h-65 relative bg-[#ddd] rounded-t-4xl">
        {/* <Image
                    src={imgUrl}
                    fill
                    className="image-hover"
                    alt={header}
                  /> */}
      </div>
      <div className="flex flex-col gap-4 p-5 font-montserrat">
        <p className="font-semibold text-lg">{header}</p>
        <div className="flex flex-col gap-2">
          <p className="text-grey">{description}</p>
          <p className="text-grey">
            <strong>Client: </strong>
            {clientName}
          </p>
          <p className="text-grey">
            <strong>Scope: </strong>
            {scope}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
