import axios from 'axios'
import {reactive} from 'vue'
import {FormStateInterface} from './contracts/formState'

interface FormData {
    email: string,
    password: string,
}

export function useRegistrationForm() {
    const formData = reactive<FormData>({
        email: '',
        password: '',
    })

    const formState = reactive<FormStateInterface>({
        state: 'idle',
        errors: {},
    })

    async function submitForm() {
        formState.errors = {}
        formState.state = 'submitting'

        axios.post('/api/registration/register', formData).then(() => {
            formState.state = 'success'
        }).catch((error) => {
            formState.errors = error.response.data.errors || {common: ['Please try again later.']}
            formState.state = 'error'
        })
    }

    return {formData, formState, submitForm}
}