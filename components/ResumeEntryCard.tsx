import { ResumeEntry } from "@/ts/types";
import React from "react";

interface ResumeEntryCardProps {
    entry: ResumeEntry;

}

const ResumeEntryCard: React.FC<ResumeEntryCardProps> = ({ entry }) => {
    return (
        <section className={"mb-10"}>
            <div>
                <div className={"flex justify-between"}>
                    <h1 className={"text-2xl font-bold"}>{entry.title}</h1>
                    <div>
                        <p>{entry.date}</p>
                    </div>
                </div>
                <p className={"text-gray-400"}>{entry.subtitle}</p>
                <p>{entry.description}</p>
            </div>
        </section>
    )
}

export default ResumeEntryCard;