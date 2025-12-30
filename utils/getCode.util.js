// src\utils\getCode.util.js
export const getCodeUtil = ({ stringLength = 5, prefix = '', suffix = '' } = {}) => {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  
    let result = prefix
  
    for (let i = 0; i < stringLength; i++) {
  
      result += characters.charAt(Math.floor(Math.random() * characters.length))
  
    }
  
    result += suffix
  
    return result
  }