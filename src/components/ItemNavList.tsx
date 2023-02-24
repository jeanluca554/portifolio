type ItemNavListProps = {
  text: string;
  icon: any;
  href: string;
}

const ItemNavList = (props: ItemNavListProps) => {
  return (
    <li className="nav_item">
      <a href={props.href} className="nav__link flex flex-col items-center text-sm text-title-color font-medium hover:text-first-color">
        {props.icon}
        {props.text}
      </a>
    </li>
  )

}

export default ItemNavList;