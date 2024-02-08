import { ReactElement } from "react";
export interface interfaceState {
	navMenuIsOpen: boolean;
	linesData: T_linesData;
	comments: T_commentsData;
}

export type T_navLinkData = {
	title: string;
	href: string;
	extra: boolean;
};

export type T_navLinksData = T_navLinkData[];

export type NavLinkProps = {
	linkData: T_navLinkData;
	mobile?: boolean;
};

export type T_headerButtonData = Omit<T_navLinkData, "extra">[];

export type LineProps = {
	isCompleted: boolean;
	id: string;
	width: number;
	lineColor: string;
};

export type T_linesData = LineProps[];

export type T_ourService = {
	id: string;
	imgSrc: string;
	imgWidth: 300;
	imgHeight: 354;
	imgAlt: string;
	title: string;
	description: string;
	buttonText: string;
};

export type T_ourServices = T_ourService[];

export type T_advantage = {
	id: string;
	text: string;
	icon: ReactElement;
};

export type T_advantageList = T_advantage[];

export type T_commentData = {
	id: string;
	text: string;
	author: string;
	role: string;
	avatar: string;
	isActive: boolean;
};

export type T_commentsData = T_commentData[];
