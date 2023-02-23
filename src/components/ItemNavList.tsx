import React, { ForwardRefExoticComponent } from "react";

type ItemNavListProps = {
  text: string;
  icon: any;
}

const ItemNavList = (props: ItemNavListProps) => {
  return (
    <li className="nav_item">
      <a href="#" className="nav__link flex flex-col items-center text-sm text-title-color font-medium hover:text-first-color">
        {props.icon}
        {props.text}
      </a>
    </li>
  )

}

export default ItemNavList;