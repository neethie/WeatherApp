import { NavLink } from "react-router-dom";

type ButtonAsideProps = {
    icon: string;
};

export default function ButtonAside({ icon }: ButtonAsideProps) {
    return (
        <>
            <NavLink to="/">
                <div className=" flex justify-center items-center">
                    <img src={`/iconsAside/${icon}.svg`} alt="icon" />
                </div>
            </NavLink>
        </>
    );
}
