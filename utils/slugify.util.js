/*
    src\utils\slugfy.util.js
    Description: This function receives a string and returns a slugified version of it
    Usage: slugify('Some text with spaces and accents') result 'some-text-with-spaces-and-accents'
*/
export const slugifyUtil = (text) => {
    return text
      .normalize('NFD') // Normalize to decompose accented letters
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-'); // Replace multiple - with single -
  }