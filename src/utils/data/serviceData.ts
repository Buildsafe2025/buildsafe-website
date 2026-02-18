import { serviceProp } from "@/interfaces/interface";

import service1 from "@public/images/services/service-1.png";
import service2 from "@public/images/services/service-2.png";
import service3 from "@public/images/services/service-3.png";

import architecturalDesign from "@public/images/services/architectural-design.png";
import civilEngineering from "@public/images/services/civil-structural.png";
import electricalEngineering from "@public/images/services/elect-engineering.png";
import mechEngineering from "@public/images/services/mech-engineering.png";
import quantitySurvey from "@public/images/services/quantity-survey.png";
import laserScanner from "@public/images/services/3d-laser.png";
import assetDigitization from "@public/images/services/asset-digitization.png";
import quantityControl from "@public/images/services/quality-control.png";
import bimManagement from "@public/images/services/bim-management.png";
import bulkMeasurement from "@public/images/services/bulk-measurement.png";
import cityMapping from "@public/images/services/city-mapping.png";
import constuctionManagement from "@public/images/services/construction-management.png";
import digitalTwinning from "@public/images/services/digital-twinning.png";
import nonDestructive from "@public/images/services/non-destructive.png";
import feasibility from "@public/images/services/feasibility.png";
import structuralAsset from "@public/images/services/structural-asset.png";
import visualizerPro from "@public/images/services/visualizer-pro.png";
import droneSurvey from "@public/images/services/drone-survey.png";

export const services: serviceProp[] = [
  {
    imgUrl: service1,
    header: "Construction Engineering Consultancy",
    description:
      "We deliver tailored civil, structural, mechanical, electrical, and environmental engineering solutions for projects of any scale.",
  },
  {
    imgUrl: service2,
    header: "Project Management",
    description:
      "We streamline your projects from start to finish, ensuring smooth execution, clear coordination, and successful delivery.",
  },
  {
    imgUrl: service3,
    header: "Reality Capture",
    description:
      "We create precise digital models through advanced scanning, enabling better visualization, accurate analysis, and seamless integration into your BIM workflow.",
  },
];

export const engineeringConsultancy: serviceProp[] = [
  {
    imgUrl: architecturalDesign,
    header: "Architectural Design",
    description:
      "We deliver architectural, interior, and landscape designs tailored to your needs and budget. Using modern tools and sustainable design principles, we create functional, beautiful spaces that reflect your vision.",
  },
  {
    imgUrl: civilEngineering,
    header: "Civil/ Structural Engineering",
    description:
      "Our civil and structural engineers provide end-to-end solutions from concept to completion. With advanced technology and precise execution, we deliver safe, efficient, and reliable structures for any project scale.",
  },
  {
    imgUrl: electricalEngineering,
    header: "Electrical Engineering",
    description:
      "We design and implement electrical systems with accuracy and innovation. Our team focuses on safe installations, efficient power solutions, and seamless project delivery tailored to your specific requirements.",
  },
  {
    imgUrl: mechEngineering,
    header: "Mechanical Engineering",
    description:
      "We provide mechanical engineering solutions including plumbing, HVAC, and system designs. Our team uses advanced tools to ensure efficiency, reliability, and smooth coordination throughout your project.",
  },
  {
    imgUrl: quantitySurvey,
    header: "Quantity Surveying",
    description:
      "We offer accurate cost estimates, bills of quantities, valuations, and cost control. Using advanced reality capture for complex measurements, we enhance precision and support better project decisions.",
  },
  {
    imgUrl: quantityControl,
    header: "Quality Control",
    description:
      "Our quality experts ensure every project meets required standards using advanced tools and strict compliance checks to guarantee consistent, high-quality results.",
  },
];

export const projectManagement: serviceProp[] = [
  {
    imgUrl: bimManagement,
    header: "BIM Management",
    description:
      "Advanced BIM services including 3D modeling, clash detection, quantity take-off, and construction documentation. We help teams coordinate better, reduce costs, and improve project outcomes.",
  },
  {
    imgUrl: feasibility,
    header: "Feasibility",
    description:
      "Comprehensive feasibility studies to assess project viability, minimize risks, and guide informed decision-making. Our insights set your project up for long-term success.",
  },
  {
    imgUrl: constuctionManagement,
    header: "Construction Management",
    description:
      "Professional construction oversight covering contracts, site management, quality control, and HSE compliance. We ensure projects are delivered efficiently, safely, and to the highest standards.",
  },
];

export const realityCapture: serviceProp[] = [
  {
    imgUrl: laserScanner,
    header: "3D Laser Scanning",
    description:
      "Our 3D laser scanning service gives you fast, highly accurate measurements of any structure or site. We capture every detail in a point-cloud format, helping you understand existing conditions clearly before design, renovation, or verification work begins.",
  },
  {
    imgUrl: assetDigitization,
    header: "Asset Digitization",
    description:
      "With asset digitization, we turn your buildings, equipment, and facilities into digital replicas that store all relevant data in one place. This makes maintenance easier, improves performance tracking, and helps teams manage assets more effectively over their entire life cycle.",
  },
  {
    imgUrl: cityMapping,
    header: "City Mapping",
    description:
      "Our city mapping service creates detailed digital maps of entire urban areas—roads, structures, utilities, and terrain. It provides the accurate spatial information needed for city planning, infrastructure development, transportation design, and smart city initiatives.",
  },
  {
    imgUrl: digitalTwinning,
    header: "Digital Twinning",
    description:
      "Digital twinning allows you to see how your asset behaves in real time. We create a virtual model that mirrors the physical asset, helping you monitor performance, simulate future conditions, predict issues before they occur, and make better operational decisions.",
  },
  {
    imgUrl: structuralAsset,
    header: "Structural Monitoring of Assets",
    description:
      "For structural monitoring, we deploy sensors that track movement, stress, vibrations, and other critical indicators. This early detection system helps prevent structural failures, improves safety, and supports long-term maintenance planning for buildings, bridges, towers, and other assets.",
  },
  {
    imgUrl: nonDestructive,
    header: "Non-Destructive Investigation ",
    description:
      "Our NDT service uses tools like Ground Penetrating Radar (GPR) to examine underground conditions without any damage or excavation. We help you locate utilities, voids, moisture pockets, and other hidden features, ensuring safer and more informed decision-making on-site.",
  },
  {
    imgUrl: bulkMeasurement,
    header: "Bulk Measurement",
    description:
      "With our bulk measurement service, we capture accurate 3D volumes of stockpiles and materials. This helps you manage inventory better, plan logistics with confidence, and reduce errors in cost estimates and material tracking.",
  },
  {
    imgUrl: visualizerPro,
    header: "Visualizer Pro",
    description:
      "Give all project stakeholders real BIM experience with Buildsafe Visualizer Pro.  Conduct site tours using real panoramic views of the site. Take the site to every project stakeholder",
  },
  {
    imgUrl: droneSurvey,
    header: "Drone Survey",
    description:
      "Our drone survey workflow is an effective solution when speed and accessibility are essential. It is especially useful for investigations, boundary determinations, and topographical surveys, allowing us to streamline processes and achieve accurate results efficiently.",
  },
];