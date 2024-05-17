"use client"

import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from 'next/link';
import { Button } from './ui/button';

export default function Header() {
    return (
        <div className='py-3 text-white bg-gray-800 px-10'>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Button variant="ghost">
                            <Link href="/"  >Home</Link>
                        </Button>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Button variant="ghost">
                            <Link href="/about" >
                                About
                            </Link>
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
