import { useInView } from "framer-motion";
import React, { useRef } from "react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function ScrollAnimation({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}

export default ScrollAnimation;
