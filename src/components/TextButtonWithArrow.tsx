import React from "react";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const PrimaryButton = ({
    children,
    onClick,
    className = "",
    ...props
}: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    [key: string]: any;
}) => (
    <button
        className={`btn btn-primary ${className}`}
        onClick={onClick}
        {...props}
    >
        {children}
    </button>
);

export default function TextButtonWithArrow({ text, href }: { text: string; href: string }) {
    return (
        <Link href={href} className="group inline-flex items-center gap-2">
            {text}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
    );
}