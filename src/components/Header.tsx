"use client"

import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';

export default function Header() {
    return (
        <div className='py-3'>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/"  >Home</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/about" >
                            About
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
