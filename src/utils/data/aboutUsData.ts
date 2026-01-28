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
        linkedIn: "#",
    },
    {
        name: "Cyprian Orakpo",
        role: "Board Chairman",
        linkedIn: "#",
    },
    {
        name: "Peter Jude Osuji",
        role: "Legal P.R.O",
        linkedIn: "#",
    },
    {
        name: "Blessing Oduopara",
        role: "Admin. Director",
        linkedIn: "#",
    },
    {
        name: "Muideen Jimoh",
        role: "Surveyor",
        linkedIn: "#",
    },
    {
        name: "Uyomi. O Eya",
        role: "R & D Manager",
        linkedIn: "#",
    },
    {
        name: "Mercy Echeruo",
        role: "Marketing",
        linkedIn: "#",
    },
    {
        name: "Emmanuel Eneh",
        role: "H.O.D Reality Capture",
        linkedIn: "#",
    },
    {
        name: "Chinemere Nwadinobi",
        role: "H.O.D Project mgt.",
        linkedIn: "#",
    },
    {
        name: "Oluwaseyi Ogunrinola",
        role: "I.T Support",
        linkedIn: "#",
    },
];

export { aboutUsContent, teamMembers, coreValues }