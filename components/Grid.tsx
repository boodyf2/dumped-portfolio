import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GridProps {
    children: ReactNode;
    className?: string;
}

const Grid = ({ children, className }: GridProps) => {
    return (
        <div className={cn("grid grid-cols-1 md:grid-cols-8 gap-8", className)}>
            {children}
        </div>
    );
};

interface GridItemProps {
    children: ReactNode;
    className?: string;
}

const GridItem = ({ children, className }: GridItemProps) => {
    return (
        <div
            className={cn(
                "col-span-1 bg-black-150 overflow-hidden border border-white/[0.1] rounded-xl",
                className
            )}
        >
            {children}
        </div>
    );
};

Grid.Item = GridItem;

export default Grid;
