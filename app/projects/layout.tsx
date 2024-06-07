"use client";

import {Hero, HeroBackground, HeroContent, HeroDescription, HeroTitle} from "@/components/Hero";
import React from "react";
import Projects from "@/ts/projects";
import Container from "@/components/Container";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Subtitle, Title} from "@/components/text/Headings";

function getSelectedProject() {
    let project = parseInt(sessionStorage.getItem("selectedProject") || "0");
    return Projects[project];
}

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    let project = getSelectedProject()
    return (
        <section>
            <Hero className={"h-96"}>
                <HeroContent className={"bg-white bg-opacity-75 border-2 p-5 min-w-20"}>
                    <HeroTitle>
                        <Title>
                            {project.title}
                        </Title>
                    </HeroTitle>
                    <HeroDescription>
                        <Subtitle className={"text-center"}>
                            {project.shortDescription}
                        </Subtitle>
                    </HeroDescription>
                </HeroContent>
                <HeroBackground>
                    <div className={"mx-auto w-full h-full bg-no-repeat bg-cover bg-center"}
                         style={{backgroundImage: `url(/ballbash/page_bg_raw.jpg)`}}/>
                </HeroBackground>
            </Hero>
            <nav className={"h-14 border-t-2 border-b-2 mb-5"}>
                <Container>

                </Container>
            </nav>
            <Container>
                {children}
            </Container>
            <div className={"fixed top-5 left-5"}>
                <Link href={"/#portfolio"}>
                    <Button className={"w-14 h-14 bg-blue-400 flex items-center justify-center"}>
                        <ArrowLeft className={"w-14 h-14"} color={"white"}/>
                    </Button>
                </Link>
            </div>
        </section>
    );
}
