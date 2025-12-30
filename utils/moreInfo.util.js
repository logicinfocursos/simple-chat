/*
    src\utils\moreInfo.util.js    
    description: This function is used to limit the length of the text to be displayed.
    usage: moreInfoUtil({ content: 'Some text to be shortened', maxlength: 10 }) result 'Some text ...'
*/
export const moreInfoUtil = ({ content, maxlength = 30 }) => {

    if (!content) return ''

    let _text = ''

    if (typeof content === 'string') _text = content
    if (typeof content === 'number') _text = content.toString()

    if (_text.length > maxlength) _text = _text.slice(0, maxlength) + ' ...'

    return _text
}