import Heading from '@/components/Common/Heading/Heading'

interface NavbarHeaderProps {
    mainTitle?: string
    subTitle?: string
}

const NavbarHeader: React.FC<NavbarHeaderProps> = ({
    mainTitle, subTitle
}) => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto md:w-max-[80%]">
            <Heading class="text-3xl font-semibold dark:text-white" level="h1" text={mainTitle} bold={true}/>
            <Heading level="h2" text={subTitle} bold={false}/>
        </div>
    );
}

export default NavbarHeader;