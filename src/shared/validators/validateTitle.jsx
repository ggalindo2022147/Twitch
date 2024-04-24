export const validateTitle = (title) =>{
    return title.length >=3 && title.length <= 30
}

export const validationTitleMessage = 'El titulo debe de tener entre 3 y 30 caracteres'