function importAllImages(r) {
    let images = {};
    r.keys().forEach((key) => {
        const fileName = key.replace('./', '').replace('.png', '');
        images[fileName] = r(key);
    });
    return images;
}
  
const clothingImages = importAllImages(require.context('../components/clothing_images', false, /\.png$/));
  
export default clothingImages;
  