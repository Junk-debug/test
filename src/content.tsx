import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/sonner"
import sonnerCss from "data-text:@/../node_modules/sonner/dist/styles.css"
import cssText from "data-text:@/style.css"
import { type PlasmoGetStyle } from "plasmo"
import { toast } from "sonner"

export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText + sonnerCss
  return style
}

export default function CustomButton() {
  return (
    <>
      <Button onClick={() => toast.info("worrks")}>Click me</Button>
      <Toaster />
    </>
  )
}
