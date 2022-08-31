function RadioInput({children, selectedId, ...props}) {
    let isAdditionalVisible = selectedId === props.id

    return (
        <div
            className="form-control"
        >
            <input
                type="radio"
                {...props}
            />
            <label htmlFor={props.id}>{props.label}</label>
            {isAdditionalVisible && children &&
                <div className="form-additional">
                    {children}
                </div>
            }
        </div>
    )
}

export default RadioInput