export const createAdaptedProductFromFirestore = (doc) => {
    const data = doc.data()
    
    const productAdapted = {
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        stock: data.stock,
        category: data.category,
        title: data.title,
        front: data.front,
        description: data.description
    }


    return productAdapted
}