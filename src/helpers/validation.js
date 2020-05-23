// FROM: https://svelte.dev/repl/54d159b954d9412c8247807125d9fe1b?version=3.12.1

import { writable } from 'svelte/store'
import { buildValidator } from './validate.js'

export function createFieldValidator(...validators) {
    const { subscribe, set } = writable({ dirty: false, valid: false, message: null })
    const validator = buildValidator(validators)

    function action(node, binding) {
        function validate(value, dirty) {
            const result = validator(value, dirty)
            set(result)
        }

        validate(binding, false)

        return {
            update(value) {
                validate(value, true)
            }
        }
    }

    return [{ subscribe }, action]
}