import { StaticImageData } from "next/image";

export type offerProp = {
  label: string;
  number: number | string;
};

export type serviceProp = {
  imgUrl: StaticImageData;
  header: string;
  description: string;
};

export interface projectCardProp {
  header: string;
  description: string;
  clientName: string;
  scope: string;
  imgUrl?: string;
};

export type footerLinkProp = {
  header: string;
  links: {
    label: string;
    href: string;
  }[];
};

export type aboutUsProp = {
  header: string;
  description: string;
  imgUrl?: StaticImageData;
  iconUrl?: string;
};

export type teamMemberProp = {
  name: string;
  role: string;
  linkedIn: string;
};