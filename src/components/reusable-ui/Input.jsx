

export default function Input({
    value,
    onChange,
    icon: Icon,
    ...extraProps
}) {
    return (
        <div className="inputWrapper">
            {Icon && <Icon className="inputIcon" />}
            
            <input
                value={value}
                onChange={onChange}
                {...extraProps}   //Josepht_com - très important
            />
        </div>
    );
}
