import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const MagicButton = ({
    text,
    children,
    icon,
    onClick,
    disabled,
    className,
}: {
    text?: string;
    children?: ReactNode;
    icon?: { element: ReactNode; position: string };
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(
                "relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
                className
            )}
        >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                {icon?.position === "left" && icon?.element}
                {children}
                {text}
                {icon?.position === "right" && icon?.element}
            </span>
        </button>
    );
};

export default MagicButton;
