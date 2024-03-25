import React from "react";

interface HeadingProps {
    text?: string
    class?: string
    level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p"
    bold?: boolean
}


const Heading: React.FC<HeadingProps> = (heading) => {
    const Heading = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) => 
        React.createElement(heading.level || "h1", {className: heading.class}, props.children);

    return (
        <Heading>
            {heading.bold ? (
                <strong>
                    {heading.text}
                </strong>
            ) : (
                <>
                    {heading.text}
                </>
            )}
        </Heading>
    );
}

export default Heading;