import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

import { ProjectCard } from "@/components/project-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { FadeIn } from "@/components/fade-in"
import { useState } from "react"

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col will-change-transform">
      <header className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-start gap-4 lg:w-2/5 lg:pl-12 lg:pt-4">
            <div className="flex items-center gap-4 transition-transform duration-300 ease-in-out hover:scale-105">
              <Image 
              className="filter invert dark:filter-none transition-filter"
              src="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/logo.png"
              alt="Logo"
              width={60}
              height={60}
              unoptimized={true} />
              <div>
              <h1 className="text-2xl font-bold">Marcelo Álvarez</h1>
              <p className="text-base text-muted-foreground">Architect | Computational Designer</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.linkedin.com/in/marcelo-%C3%A1lvarez-a9253717a/"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/alvarezdmarch"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:alvarezdm.arch@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <ThemeToggle />
            </div>
            <Link
              href="https://alvarezdm.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="self-stretch w-full mt-3 inline-block px-4 py-2 
                          bg-primary-foreground text-primary 
                          font-medium 
                          transition-colors hover:bg-primary-foreground/75"
              >
                Personal website - About me
              </button>
            </Link>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-lg font-semibold mb-2">About Me</h2>
            <p className="text-sm leading-relaxed">
              I have a professional degree in Architecture, specialized in computational design with experience 
              in the industry and the academia. I am currently a M.S. in Design Computation graduate student at the 
              Georgia Institute of Technology. My interest focuses on data-driven methods for architecture and 
              design in general. I have the skills and experience to develop architectural projects at all stages, 
              integrating specialized skills in design scripting, parametric modeling, custom tool, development, and data analytics.
            </p>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 h-[calc(100vh-14rem)] max-w-full mx-auto">
          <div className="space-y-8 overflow-y-auto px-4">
            <h2 className="sticky top-0 z-10
                 text-xl font-semibold mb-4
                 bg-background/50 backdrop-blur-sm
                 py-2
                 text-center
                 -mx-4 px-4">
              Architecture
            </h2>
            <FadeIn>
              <ProjectCard
                title="Social Housing Reconstruction"
                description="As of February 4, a total of 8400 ha. had been burned, with active fire
                outbreaks in Valparaíso, Chile. The area of El Olivar was one of the most
                affected communities, with more than 900 houses devastated. The goal
                was to design a house proposal for all families in the neighborhood, aligning
                with their expectations and adjusting to the set of requirements by the
                construction codes."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/reconstruccion.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Social Housing Reconstruction"
                description="The design proposal consisted of a continuous house units improving
                the existent quality of life significantly. From 32 m2 to 67 m2, a two-storey
                house will grant three bedroom + 2 bathroom solution for the community.
                The main assignment for this task was to constantly communicate and
                showcase the progress to the neighbors."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/renderint.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Social Housing Reconstruction"
                description=""
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/renderint2.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Social Housing Reconstruction"
                description=""
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/PLANTAS TIPO A2.jpg"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Modulo - Healthcare of the Future"
                description="As a part of the course Healthcare Design of the Future at Georgia Tech, this project is a modular solution
                addressing the transportation limitations of the rural healthcare system in the US."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/hcotf.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Sede B80"
                description="A community headquarters project."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/sede80.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Sede B80"
                description="A community headquarters project."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/sede80diag.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
              title="Emergency Family House"
              description="A family lost his home due to an unexpected fire. The home owner
              quickly started the self-construction of her new house completely
              ignoring the regulations and building code. This project needed to
              fulfill their specific requirements and adjust the current state of the
              project to meet all the requirements.

              With a rectangular site of 8 x 40 m., the challenge was to provide
              a house solution which could not exceed a certain height under
              the projection of 60° from the edges of the site towards the center.
              This limited the dimensions to 3.5 m. width. Additionally, the
              owner already constructed a 4.5 m. height platform. The design
              proposal satisfied both her requirements and construction codes
              completely."
              imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/karina.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Southern Housing Solution Assistance"
                description=""
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/sur.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Lo Orozco"
                description=""
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/orozco.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="IceNova MARS"
                description=""
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/mars1.jpg"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="IceNova MARS"
                description=""
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/mars2.jpg"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Interior Remodeling Assessment"
                description=""
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/precision.jpg"
              />
            </FadeIn>
          </div>
          <div className="space-y-8 overflow-y-auto px-4">
            <h2 className="sticky top-0 z-10
                 text-xl font-semibold mb-4
                 bg-background/50 backdrop-blur-sm
                 py-2
                 text-center
                 -mx-4 px-4">
              Computational Design
            </h2>
            <FadeIn>
              <ProjectCard
                title="Office Energy Model - Design Space Exploration for Glare"
                description="Based on a custom Grasshopper script using EnergyPlus through ClimateStudio, this project is an early design space
                aiming to explore the energy, daylighting, and glare performance of a small office building."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/9seg53.gif"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Office Energy Model - Design Space Exploration for Daylight"
                description="Based on a custom Grasshopper script using EnergyPlus through ClimateStudio, this project is an early design space
                aiming to explore the energy, daylighting, and glare performance of a small office building."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/9seg3q.gif"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Office Energy Model - Design Space Exploration for Daylight"
                description=""
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/9seg25.gif"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="UMCF Grasshopper Plugin - Visualization Tools"
                description="The UMCF plugin is a Grasshopper plugin being developed by Gonzalo
                Vegas, Patrick Kastner, and Marcelo Álvarez. The main purpose of
                developing visualization components is to leverage the power of a
                Rhinoceros - Grasshopper environment for the end user."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/umcfviz.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="CFD Visualization Methods"
                description="The project aims to augment the control of the user
                over the airflow particles as a result of a Computational
                Fluid Dynamics simulation. The workflow consists of
                performing a high resolution simulation and developing
                scripts to manipulate the resulting data. One of the
                results is a custom web application to visualize the data."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/cfdviz.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="CFD large dataset manipulation"
                description=""
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/cfddata.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="urbanMicroclimateFoam vs. ENVI-met"
                description="This project is an initial statistical comparison between the urbanMicroclimateFoam solver and
                ENVI-met. The main goal is to understand the differences between both solvers and calibrate the UMCF solver using Grasshopper."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/umcfvsenvimet.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="BIM/IFC Assessment and Manipulation"
                description="The project aims to augment the information and geometrical entities from a BIM
                model. Specifically, a workflow for IFC authoring would allow to perform custom
                assessments and obtain performance metrics from a BIM model. This workflow integrates Revit and Rhinoceros + Grasshopper platforms as
                modeling tools, with large IFC 4x3 datasets. By using the IfcOpenShell library with
                Python, different scripts are developed to query, process, and analyze information
                directly from the IFC dataset. Additionally, by leveraging the power of graph
                theory, additional tools to plot graphs are developed to generate a complete
                understanding of the BIM model quality, and the building performance."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/ifcbim.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Metro Atlanta Diastance Network Analysis"
                description="This project is a part of the course Public Health Analyttics at Georgia Tech. The main contribution is the
                extraction of data from the OSM database, and the development of a custom interpolation method to create a complete geospatial representation
                of the metro Atlanta distance network."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/mapping.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Design Spaces of Structurally Pre-evaluated Funicular Shapes"
                description="This implementation focuses on exploring design spaces in early design stages. 
                The proposed technique approaches the problem of reducing the flexibility of the design space 
                while advancing to later design stages for vault-like shapes."
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/res2.png"
              />
            </FadeIn>
            <FadeIn>
              <ProjectCard
                title="Modeling technique for vault-like structure generation through topological manipulation"
                description="This study is based on the development of a modeling technique for vault-like structure 
                generation through topological manipulation. Currently, topology-driven form-finding has been 
                implemented in tensile structures, but no further studies have been conducted for compression-only structures. 
                The focus of this study is to approach the problem of highly determined vault shapes by their input topology. "
                imageSrc="https://raw.githubusercontent.com/alvarezdmarch/portfolio2/refs/heads/main/public/res1.png"
              />
            </FadeIn>
          </div>
        </div>
      </main>
    </div>
  )
}

