import React from "react";
import { FunctionComponent } from "react";

interface HeadingProps {
    children?: React.ReactNode
    headingClass?: string
    headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
}


const Heading: React.FC<HeadingProps> = ({
    children,
    headingClass,
    headingLevel = "h1"
}) => {
    const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => 
        React.createElement(headingLevel, {className: headingClass}, children);

    return (
        <Heading>{children}</Heading>
    );
}

export default Heading;