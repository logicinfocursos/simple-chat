export const findMainImageUtil = ({ imageList  }) => {

    const index = imageList.findIndex(i => i.isMain);

    return index !== -1 ? index : 0;
}
