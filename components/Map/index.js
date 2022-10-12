import dynamic from "next/dynamic"

const SimpleMap = dynamic(() => import("./SimpleMap"), {
  ssr: false,
})

export default SimpleMap
