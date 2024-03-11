import Heading from '@/app/components/_common/Heading'

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="items-center">
            <>
                <Heading headingClass="fixed justify-center" headingLevel="h1"> 
                    Matan Afriat
                </Heading>
            </>
        </div>
    );
}

export default Header;