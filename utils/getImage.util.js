
export const getImageUtil = ({ image, imageList = null, imageType = 'product', returnList = false, listIndex = 0 }) => {

    const prefixPath = process.env.NEXT_PUBLIC_IMAGES_PATH + process.env.NEXT_PUBLIC_IMAGES_THUMBNAIL_VERSION_FOLDER
    const noImage = process.env.NEXT_PUBLIC_IMAGES_NOIMAGE

    if (Array.isArray(image)) {

        if (returnList) {

            return image.map(img => prefixPath + (img && img.filename ? img.filename : noImage))

        } else {

            if (image.length > 1) {

                return prefixPath + (image[listIndex] && image[listIndex].filename ? image[listIndex].filename : noImage)

            } else return prefixPath + noImage
        }
    } 
    
    else if (image && typeof image === 'object') return image.filename ? prefixPath + image.filename : noImage;

    else if (image && typeof image === 'string') return image ? prefixPath + image : noImage;
}
