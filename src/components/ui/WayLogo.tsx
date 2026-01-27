import Image from "next/image"
import { cn } from "@/lib/utils"

type WayLogoProps = {
  className?: string
  size?: "small" | "default" | "large"
  priority?: boolean
}

export default function WayLogo({
  className,
  size = "default",
  priority = false,
}: WayLogoProps) {
  const sizeMap = {
    small: 32,
    default: 48,
    large: 64,
  }

  const dimension = sizeMap[size]

  return (
    <Image
      src="/images/way-logo.png"
      alt="Way Escapamentos"
      width={dimension}
      height={dimension}
      priority={priority} // importante pro header
      className={cn("w-auto h-auto object-contain", className)}
    />
  )
}
