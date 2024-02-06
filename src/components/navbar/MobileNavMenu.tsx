import { navLinksData } from "@/data/data";
import { NavLink } from "..";

const MobileNavMenu = () => {
	return (
		<ul className="absolute z-10 top-12 right-0 w-fit flex flex-col justify-center items-center gap-4 p-4 bg-custom-white rounded-md ">
			{navLinksData.map((linkData) => (
				<NavLink key={linkData.title} linkData={linkData} mobile={true} />
			))}
		</ul>
	);
};

export default MobileNavMenu;