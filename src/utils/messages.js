import { SnackbarProgrammatic as Snackbar } from 'buefy'
export const succesMessage = (message = 'Success') => {
  Snackbar.open({
    duration: 5000,
    message,
    type: 'is-success',
    position: 'is-top',
    actionText: 'Ok',
    indefinite: false
  })
}

export const errorMessage = (message = 'Error') => {
  Snackbar.open({
    duration: 5000,
    message,
    type: 'is-danger',
    position: 'is-top',
    actionText: 'Ok',
    indefinite: false
  })
}
