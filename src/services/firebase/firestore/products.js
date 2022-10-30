import { getDocs, collection, query, where } from 'firebase/firestore'
import { database } from "../index"
import { createAdaptedProductFromFirestore } from '../../../adapter/productAdapter'

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
            const collectionRef = categoryId 
            ? query(collection(database, 'products'), where('category', '==', categoryId))
            : collection(database, 'products')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    return createAdaptedProductFromFirestore(doc)
                })
                resolve(productsAdapted)
            })
            .catch(error => {
                reject(error)
            })
    })
}