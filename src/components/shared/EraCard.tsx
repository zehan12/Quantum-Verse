"use client";

import { Card, CardContent } from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

type EraCardProps = {
    title: string
    subtitle: string
    label: string
    description: string
    color: string
    Icon: React.ElementType
    imgPath?: string

}

export const EraCard = ({ title, subtitle, label, description, color, Icon, imgPath }: EraCardProps) => {

    const shadowColor = color === "text-orange-400" ? "shadow-[8px_8px_0_#fb923c]" :
        color === "text-cyan-400" ? "shadow-[8px_8px_0_#22d3ee]" :
            "shadow-[8px_8px_0_#e879f9]";

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Card className={`cursor-pointer w-full md:w-80 border-2 rounded-sm bg-[#0A0A0A] shadow-[8px_8px_0_#1A1A1A] hover:shadow-[4px_4px_0_#1A1A1A] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 ${color.replace("text", "border")} shadow-sm h-full`}>
                    <CardContent className="p-6 text-center font-mono h-full flex flex-col">
                        <Icon className={`${color} w-8 h-8 mx-auto mb-4`} />
                        <h3 className={`text-xl font-space font-bold uppercase tracking-wider ${color}`}>{title}</h3>
                        <p className="text-md text-[#E0E0E0] mb-4">{subtitle}</p>
                        {imgPath && (
                            <div className="w-60 h-28 mx-auto relative mt-2 flex-grow">
                                <Image
                                    src={imgPath}
                                    alt={title}
                                    fill
                                    className="object-contain rounded-2xl"
                                />
                            </div>
                        )}
                        <p className={`font-bold uppercase tracking-widest text-xs mt-4 mb-2 ${color}`}>{label}</p>
                        <p className="text-[#A0A0A0] text-sm mt-2 leading-relaxed text-left border-l-2 border-[#333] pl-3 line-clamp-3">{description}</p>
                    </CardContent>
                </Card>
            </DialogTrigger>

            <DialogContent className={`max-w-4xl w-[95vw] bg-[#0A0A0A] border-2 ${color.replace("text", "border")} rounded-sm ${shadowColor} p-10 font-mono`}>
                <DialogHeader className="mb-4">
                    <DialogTitle className={`font-space uppercase tracking-widest text-2xl ${color}`}>
                        {title} {subtitle}
                    </DialogTitle>
                </DialogHeader>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {imgPath && (
                        <div className="w-full md:w-1/2 aspect-video relative">
                            <Image
                                src={imgPath}
                                alt={title}
                                fill
                                className="object-cover rounded-sm border-2 border-[#1A1A1A]"
                            />
                        </div>
                    )}
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <Icon className={`${color} w-6 h-6`} />
                            <p className={`font-bold uppercase tracking-widest text-sm ${color}`}>{label}</p>
                        </div>
                        <p className="text-[#E0E0E0] text-base leading-relaxed border-l-4 border-[#333] pl-4">{description}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
