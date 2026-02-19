import visionImg from "@public/images/our-vision.png";
import missionImg from "@public/images/our-mission.png";
import { aboutUsProp, teamMemberProp } from "@/interfaces/interface";

import cyprian from "@public/images/team/cyprian.png";
import blessing from "@public/images/team/blessing.png";
import chinemere from "@public/images/team/chinemere.png";
import donatus from "@public/images/team/donatus.png";
import emmanuel from "@public/images/team/emmanuel.png";
import mercy from "@public/images/team/mercy.png";
import muideen from "@public/images/team/muideen.png";
import oluwaseyi from "@public/images/team/oluwaseyi.png";
import peter from "@public/images/team/peter.png";
import uyomi from "@public/images/team/uyomi.png";
import blessingO from "@public/images/team/blessing-obiageri.png";

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
        name: "Cyprian Orakpo",
        role: "Board Chairman",
        imgUrl: cyprian,
        linkedIn: "https://www.linkedin.com/in/cyprian-orakpo-93291446",
    }, 
    {
        name: "Donatus Oduopara",
        role: "Managing Director",
        imgUrl: donatus,
        linkedIn: "https://www.linkedin.com/in/donatus-oduopara-4a943940",
    },

    {
        name: "Peter Jude Osuji",
        role: "Head, Legal & Public Relation",
        imgUrl: peter,
        linkedIn: "https://linkedin.com/in/peter-jude-osuji-llb-bl-aciarb-uk-aicmc-notary-public-44b25b21",
    },
    {
        name: "Blessing Oduopara",
        role: "Administrative Director",
        imgUrl: blessing,
        linkedIn: "https://www.linkedin.com/in/blessing-oduopara-10485777",
    },
    {
        name: "Chinemere Nwadinobi",
        role: "Head, Engineering & Project Management",
        imgUrl: chinemere,
        linkedIn: "https://www.linkedin.com/in/chinemerem-nwadinobi",
    },
    
    {
        name: "Emmanuel Eneh",
        role: "H.O.D Reality Capture",
        imgUrl: emmanuel,
        linkedIn: "https://www.linkedin.com/in/emmanuel-eneh-cswp",
    },
    {
        name: "Uyomi. O Eya",
        role: "Head, Research & Innovation",
        imgUrl: uyomi,
        linkedIn: "https://www.linkedin.com/in/uyomi-eya-aa840a150",
    },
    
    {
        name: "Muideen Jimoh",
        role: "Head, Quantity Surveying",
        imgUrl: muideen,
        linkedIn: "#",
    },
    {
        name: "Mercy Echeruo",
        role: "Head, Marketing & Communication",
        imgUrl: mercy,
        linkedIn: "https://www.linkedin.com/in/mercy-oluchi-echeruo-82843b77",
    },
    
    {
        name: "Oluwaseyi Ogunrinola",
        role: "I.T Operations Manager",
        imgUrl: oluwaseyi,
        linkedIn: "https://www.linkedin.com/in/oluwaseyiogunrinola",
    },
    {
        name: "Blessing Obiageri Ugbede",
        role: "Head of Finance",
        imgUrl: blessingO,
        linkedIn: "https://www.linkedin.com/in/joy-ugbede-914aa0268",
    },
];

export { aboutUsContent, teamMembers, coreValues }