import React from 'react';
function MyTextField(props) {
    const { placeholder } = props;
    const [value, setValue] = React.useState('')
    return (
        <input
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}
export default MyTextField;