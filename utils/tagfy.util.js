/*
    src\utils\tagfy.js
    Description: Converts a string to a tag-like string
    Usage: tagfy('Some text with spaces and accents') result 'some,text,with,spaces,and,accents'
*/
export const tagfyUtil = (text) => {
    return text
    .normalize('NFD') // Normalize to decompose accented letters
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove all non-word chars except spaces
    .replace(/\s+/g, ','); // Replace spaces with commas
}