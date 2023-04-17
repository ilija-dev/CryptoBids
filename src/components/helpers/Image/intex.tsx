import * as React from "react";

type ImageProps = {
  svg?: React.FC | null;
  src?: string;
  className?: string;
  alt?: string;
  onClick?: (() => void) | null;
};

const Image = ({ src, alt, onClick }: ImageProps) => {
  return <img src={src} alt={alt} />;
};

export default Image;
