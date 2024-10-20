'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/Ui/navbar-menu";
import { cn } from "../utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
        className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/home"}>
                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Our Courses">
                <HoveredLink href="/courses">All Courses</HoveredLink><br />
                <HoveredLink href="/courses">Basic Music Theory</HoveredLink><br />
                <HoveredLink href="/courses">Advanced Composition</HoveredLink><br />
                <HoveredLink href="/courses">Song Writing</HoveredLink><br />
                <HoveredLink href="/courses">Music Production</HoveredLink><br />
                </MenuItem>

                <Link href={"/contact"}>
                <MenuItem setActive={setActive} active={active} item="Contact">

                </MenuItem>
                </Link>
            </Menu>
        </div>

    );  
}