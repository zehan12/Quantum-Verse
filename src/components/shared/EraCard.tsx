"use client";

import { Card, CardContent } from "@/components/ui/card"
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
    return (
        <Card className={`w-80 border ${color.replace("text", "border")} bg-transparent shadow-sm`}>
            <CardContent className="p-6 text-center">
                <Icon className={`${color} w-8 h-8 mx-auto mb-4`} />
                <h3 className={`text-lg font-semibold ${color}`}>{title}</h3>
                <p className="text-md text-white mb-4">{subtitle}</p>
                {imgPath && (
                    <div className="w-60 h-40 mx-auto relative">
                        <Image
                            src={imgPath}
                            alt={title}
                            fill
                            className="object-contain rounded-2xl"
                        />
                    </div>
                )}


                <p className={`font-medium ${color}`}>{label}</p>
                <p className="text-muted-foreground text-sm mt-2">{description}</p>
            </CardContent>
        </Card>
    )
}
