/*
  File: moreInfo.util.js
  Descrição: Limita o tamanho do texto exibido, útil para previews de mensagens.
*/
export const moreInfoUtil = ({ content, maxlength = 30 }) => {
    if (!content) return ''
    let _text = ''
    if (typeof content === 'string') _text = content
    if (typeof content === 'number') _text = content.toString()
    if (_text.length > maxlength) _text = _text.slice(0, maxlength) + ' ...'
    return _text
}