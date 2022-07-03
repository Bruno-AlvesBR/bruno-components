import { theme } from "../../styles/theme";
import { useMediaQuery } from "@mui/material";
import { ReactNode, useRef } from "react";
import Test from "react-indiana-drag-scroll";

export interface ICarrousel {
  children: ReactNode;
  mobileWidth: number;
  desktopWidth: number;
}

export const DefaultCarrousel: React.FC<ICarrousel> = ({
  children,
  mobileWidth,
  desktopWidth,
}) => {
  const divRef1 = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery(
    theme.breakpoints.down(780)
  );

  const handleScroll = (event: "prev" | "next") => {
    if (!divRef1.current && !divRef2.current) return;

    const { scrollLeft } = divRef2.current;

    const clientWidth = !isMobile
      ? desktopWidth
      : mobileWidth;

    const scrollValue =
      event === "next" ? clientWidth : -clientWidth;

    divRef2.current.scrollTo({
      left: scrollLeft + scrollValue,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ display: "block", width: "100%" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>TITLE</span>
        <span
          style={{
            marginLeft: "auto",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <button onClick={() => handleScroll("prev")}>
            PREV
          </button>
          <button onClick={() => handleScroll("next")}>
            NEXT
          </button>
        </span>
      </div>
      <div ref={divRef1}>
        <Test
          nativeMobileScroll
          horizontal
          innerRef={divRef2}
          style={{
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
          }}
        >
          {children}
        </Test>
      </div>
    </div>
  );
};
