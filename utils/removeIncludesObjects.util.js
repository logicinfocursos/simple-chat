// Excluir os objetos relacionados
export const removeIncludesObjects = (object) => {
  
    for (const key in object) {
      if (typeof object[key] === 'object') delete object[key]
    }
  
    return object
  }