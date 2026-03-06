import "./CustomImage.scss";

type CustomImageProps = {
    src: string;
    alt?: string;
    className?: string;
};

const CustomImage = ({ src, alt = "", className = "", ...props }: CustomImageProps) => {
    return (
        <div className="image">
            <div className="image__container">
                <img
                    src={src}
                    alt={alt}
                    className={className}
                    draggable="false"
                    {...props}
                />
            </div>
        </div>
    );
};

export default CustomImage;