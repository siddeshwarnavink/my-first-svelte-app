// FROM: https://svelte.dev/repl/54d159b954d9412c8247807125d9fe1b?version=3.12.1

function buildValidator(validators) {
    return function validate(value, dirty) {
        if (!validators || validators.length === 0) {
            return { dirty, valid: true }
        }

        const failing = validators.find(v => v(value) !== true)

        return {
            dirty,
            valid: !failing,
            message: failing && failing(value)
        }
    }
}

export { buildValidator }