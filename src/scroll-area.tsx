import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { styled } from "@stitches/react"

const SCROLLBAR_SIZE = 6

export function ScrollArea({ children, orientation = "vertical" }: any) {
  return (
    <StyledScrollArea>
      <ScrollViewport>{children}</ScrollViewport>
      <ScrollBar orientation={orientation}>
        <ScrollBarThumb />
      </ScrollBar>
    </StyledScrollArea>
  )
}

var StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: "100%",
  height: "100%",
  overflow: "hidden",
})

var ScrollViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: "100%",
  height: "100%",
  borderRadius: "inherit",
})

var ScrollBar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: "flex",
  // ensures no selection
  userSelect: "none",
  WebkitUserSelect: "none",
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: "none",
  padding: 2,
  background: "#c2c2c2",
  transition: "background 160ms ease-out",
  "&:hover": { background: "lightgray" },
  '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
})

var ScrollBarThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: "gray",
  borderRadius: SCROLLBAR_SIZE,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
    minWidth: 44,
    minHeight: 44,
  },
})
