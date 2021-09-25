import './Nav.scss';
import {NavLink} from 'react-router-dom'

const Nav = (props) => {
    let listItemsArray = props.navArray.map(listItem => {
        return <li className="Nav__item" key={listItem.id}>
            <NavLink exact={listItem.exact} to={listItem.linkPath} className="Nav__link"
                     activeClassName="Nav__link_active">{listItem.linkName}</NavLink>
        </li>
    });
    return (
        <nav>
            <ul className="Nav__list">
                {listItemsArray}
            </ul>
        </nav>
    )
};

export default Nav;
