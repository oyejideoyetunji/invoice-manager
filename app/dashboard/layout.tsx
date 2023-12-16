import React from "react";
import SideNav from "@/app/ui/dashboard/sidenav";



interface Props {
    children: React.ReactNode;
}


const Layout = ({
    children
}: Props) => {
    return (
        <main className=' w-full h-screen flex flex-col lg:flex-row'>
            <div className=" w-full lg:h-full lg:w-60">
                <SideNav />
            </div>

            <div className=" w-full lg:w-[calc(100%-208px)]">
                {children}
            </div>
        </main>
    );
};


export default Layout;

