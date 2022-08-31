import React from 'react';

const Submit = (props) => {
    return (
        <div className="form-control">
            <input id="submit" className="btn" type="submit" value={props.title} />
        </div>
    );
};

export default Submit;