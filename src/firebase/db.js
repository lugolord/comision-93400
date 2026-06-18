import { 
  doc, 
  getDoc, 
  getFirestore, 
  collection, 
  getDocs, 
  query, 
  where, 
  addDoc 
} from "firebase/firestore"
import { app } from './config'

const db = getFirestore(app)

export async function getCollection (collectionName, set) {
  try {
    const colRef = collection(db, collectionName) // quiero ESTA coleccion
    const querySnapshot = await getDocs(colRef) // dame los documentos de ESTA coleccion
    const data = []
    
    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id})
    })

    set(data)
  } catch (error) {
    console.error("Error al leer la colección: ", error)
  }
}

export const getProductsByCategory = async (category, set) => {
  const q = query(collection(db, "products"), where("category", "==", category))
  const querySnapshot = await getDocs(q)
  const products = []
  
  querySnapshot.forEach((doc) => {
    products.push({...doc.data(), id: doc.id})
  })

  set(products)
}

export const getProductDetail = async (id, set) => {
  const docRef = doc(db, "products", id)
  const docSnap = await getDoc(docRef)
  
  if (docSnap.exists()) {
    set({...docSnap.data(), id: docSnap.id})
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!")
  }
}

export const createOrder = async (order) => {
  const docRef = await addDoc(collection(db, "orders"), order)
  console.log("Document written with ID: ", docRef.id)
}
