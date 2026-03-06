import { ReactNode, ElementType } from "react";
import './Text.scss';

type TextProps = {
    as?: ElementType;
    className?: string;
    children: ReactNode;
};

const Text = ({ as: Tag = "p", className = "", children }: TextProps) => {
    return <Tag className={className}>{children}</Tag>;
};

export default Text;