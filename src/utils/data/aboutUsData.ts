import visionImg from "@public/images/our-vision.png";
import missionImg from "@public/images/our-mission.png";
import { aboutUsProp, teamMemberProp } from "@/interfaces/interface";

const aboutUsContent: aboutUsProp[] = [
    {
        header: "our vision",
        description:
            "Our vision is to ensure that engineering and reality capture are executed flawlessly every time.",
        imgUrl: visionImg,
    },
    {
        header: "our mission",
        description:
            "To provide high-quality engineering and reality capture solutions through innovation,  expertise, and teamwork. Our goal is to give customers accurate services and to always  strive for excellence, exceeding their expectations.",
        imgUrl: missionImg,
    },
];

const coreValues: aboutUsProp[] = [
    {
        header: "integrity",
        description: "Building trust through transparency and ethical practices.",
    },
    {
        header: "Quality",
        description: "Delivering excellence in every product and service.",
    },
    {
        header: "Customer Focus",
        description: "Putting customer needs and satisfaction first.",
    },
    {
        header: "Sustainable Design",
        description:
            " Creating solutions that minimize environmental impact and maximize responsibility.",
    },
    {
        header: "People Development",
        description: " Empowering people as the organization’s greatest asset.",
    },
    {
        header: "Community Engagement",
        description: "Actively giving back to and engaging with communities.",
    },
];
const teamMembers: teamMemberProp[] = [
    {
        name: "Donatus Oduopara",
        role: "Managing Director",
        linkedIn: "https://www.linkedin.com/in/donatus-oduopara-4a943940",
    },
    {
        name: "Cyprian Orakpo",
        role: "Board Chairman",
        linkedIn: "https://www.linkedin.com/in/cyprian-orakpo-93291446",
    },
    {
        name: "Peter Jude Osuji",
        role: "Legal P.R.O",
        linkedIn: "https://linkedin.com/in/peter-jude-osuji-llb-bl-aciarb-uk-aicmc-notary-public-44b25b21",
    },
    {
        name: "Blessing Oduopara",
        role: "Admin. Director",
        linkedIn: "https://www.linkedin.com/in/blessing-oduopara-10485777",
    },
    {
        name: "Muideen Jimoh",
        role: "Surveyor",
        linkedIn: "#",
    },
    {
        name: "Uyomi. O Eya",
        role: "R & D Manager",
        linkedIn: "https://www.linkedin.com/in/uyomi-eya-aa840a150",
    },
    {
        name: "Mercy Echeruo",
        role: "Marketing",
        linkedIn: "https://www.linkedin.com/in/mercy-oluchi-echeruo-82843b77",
    },
    {
        name: "Emmanuel Eneh",
        role: "H.O.D Reality Capture",
        linkedIn: "https://www.linkedin.com/in/emmanuel-eneh-cswp",
    },
    {
        name: "Chinemere Nwadinobi",
        role: "H.O.D Project mgt.",
        linkedIn: "https://www.linkedin.com/in/chinemerem-nwadinobi",
    },
    {
        name: "Oluwaseyi Ogunrinola",
        role: "I.T Support",
        linkedIn: "https://www.linkedin.com/in/oluwaseyiogunrinola",
    },
];

export { aboutUsContent, teamMembers, coreValues }