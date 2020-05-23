// FROM: https://svelte.dev/repl/54d159b954d9412c8247807125d9fe1b?version=3.12.1

// function emailValidator() {
//     return function email(value) {
//         return (value && !!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) || 'Please enter a valid email'
//     }
// }

function requiredValidator() {
    return function required(value) {
        return (value !== undefined && value !== null && value.trim() !== '') || 'This field is required'
    }
}

const validSpeedValidator = () => {
    const validSpeed = (value) => {
        return value > 0 || 'Enter a speed grater than 0!';
    };
    return validSpeed;
}

export {
    // emailValidator,
    requiredValidator,
    validSpeedValidator
}
