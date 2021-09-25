import './Sidebar.scss';
import SidebarNavItem from './SidebarNavItem/SidebarNavItem';
import shopWomenImage from "./../../assets/images/shopWomen.png";
import shopMenImage from "./../../assets/images/shopMen.png";

const Sidebar = () => {
    return (
        <aside className="Sidebar">
            <SidebarNavItem imagePath={shopWomenImage} text="SHOP WOMEN" />
            <SidebarNavItem classNameModificator="display-none" imagePath={shopMenImage} text="SHOP MEN" showStar={true} />
            <SidebarNavItem />
        </aside>
    )
};

export default Sidebar;
