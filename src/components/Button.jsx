import clsx from "clsx";
import { Marker } from "./Marker";

const Inner = ({ icon, children, markerFill }) => (
  <>
    <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
      <span className="absolute -left-[1px]">
        <Marker markerFill={markerFill} />
      </span>

      {icon && (
        <img
          src={icon}
          alt="circle"
          className="size-10 mr-5 object-contain z-10"
        />
      )}

      <span className="relative uppercase font-poppins font-bold text-p1 z-2">
        {children}
      </span>
    </span>

    <span className="glow-before" />
    <span className="glow-after" />
  </>
);

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}) => {
  const classes = clsx(
    "relative p-0.5 g5 rounded-2xl shadow-500 group",
    containerClassName,
  );

  return href ? (
    <a className={classes} href={href}>
      <Inner icon={icon} markerFill={markerFill}>
        {children}
      </Inner>
    </a>
  ) : (
    <button className={classes} onClick={onClick}>
      <Inner icon={icon} markerFill={markerFill}>
        {children}
      </Inner>
    </button>
  );
};

export default Button;
