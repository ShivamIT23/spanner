export default function TriangleArrow({ scrollDirection, arrowColor, arrow }) {
  const dynamicColor = scrollDirection === arrow ? arrowColor : "#C45F5F";

  const isTransform = arrow == "down";

  return (
    <svg
      width="80%"
      height="80%"
      viewBox="0 0 44 44"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="
      M 25.5 2
      L 49 43
      Q 47 44.16 45 44.16
      L 6 44.16
      Q 4 44.16 2 43
      Z
    "
        fill={dynamicColor}
        transform={isTransform ? "rotate(180, 25.5, 22.08)" : "none"}
      />
    </svg>
  );
}
