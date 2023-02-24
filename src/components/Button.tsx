import { PaperPlaneRight } from "phosphor-react";

type ButtonProps = {
  text: string;
  icon: any;
}

const Button = (props: ButtonProps) => {
  return (
    <a href="#contact" className="button button--flex inline-flex items-center bg-first-color text-white font-semibold p-4 rounded-lg hover:bg-first-color-alt">
      {props.text}{props.icon}
    </a>
  )

}

export default Button;