import { Briefcase, CodeIcon, User2Icon } from "lucide-react";

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Front-End Developer</h3>
                    <p className="text-muted-foreground">
                       I'm a Front-End Developer with a B.Sc. in Software Engineering, skilled in building responsive,
                        optimized, and user-friendly interfaces using modern technologies.
                        
                    </p>
                    <p className="text-muted-foreground">
                    I'm a quick learner who constantly improves my skills. I'm responsible, hardworking, and adaptable, with strong problem-solving abilities and proven teamwork experience in real-world projects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>
                        <a href="src/assets/Sama Mirzaee Fashami.pdf"
                         className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:bg-primary/10 transition-colors duration-300">
                            {" "}
                            Download Resume
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <CodeIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Front-End Developer</h4>
                                <p className="text-muted-foreground">
                                I build user interfaces for both web and mobile applications using modern front-end technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User2Icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">User Interface Implementation</h4>
                                <p className="text-muted-foreground">
                                Translating designs into functional, accessible, and visually consistent front-end components across platforms.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Coordination</h4>
                                <p className="text-muted-foreground">
                                Supporting project planning, task management, and smooth execution within development teams.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};