import './SidebarNavItes.scss'

const SidebarNavItem = (props) => {
    return (
        <article>
            <a href='/'>
                <img src={props.imagePath} alt={props.text} />
                <span>{props.text}</span>
                {props.showStar && <span>*</span>}
                <span className={`text text_${props.classNameModificator}`}>test</span>
            </a>
        </article>
    )
};

SidebarNavItem.defaultProps = {text: 'Hello, this is default props text', imagePath: ''};

export default SidebarNavItem;
