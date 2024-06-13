"use client"

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import React from "react";
import { Project } from "@/lib/types";
import { Heading3, Subtitle } from "@/components/text/Headings";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Link
            href={`/${project.id}`}
            className={"group outline-0 focus:ring-2 hover:ring-2 hover:shadow-xl ring-primary transition duration-300 rounded-lg lg:w-full md:w-10/12 w-10/12 mx-auto my-auto"}>
            
            <Card className={"rounded-lg border-2"}>
                <CardContent className={"pt-4"}>
                    <div className={"aspect-square relative bg-foreground/5 dark:bg-background rounded-lg"}>
                        <Image
                            src={project.thumbnail}
                            alt={project.title}
                            fill
                            className={"aspect-square object-cover rounded-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-card group-hover:translate-y-2"}
                            sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
                        />
                    </div>
                </CardContent>
                <CardFooter className={"flex-col items-start"}>
                    <div>
                        <Heading3 className={""}>{project.title}</Heading3>
                        <Subtitle className={""}>{project.description}</Subtitle>
                    </div>
                </CardFooter>
            </Card>
        </Link>
    );
}

export default ProjectCard;