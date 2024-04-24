export const validateUserName = (username) =>{
    const regex = /^\S{3,8}$/

    return regex.test(username)
}

export const ValidateUserNameMessage = 'El nombre debe de tener entre 3 y 8 caracteres sin espacios'