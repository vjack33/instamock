import HeaderCard from '../components/HeaderCard'
import ProfilePage from './ProfilePage'
import { collection, onSnapshot } from 'firebase/firestore'
import { firestoreDb } from '../index'

export default function HomePage () {
  const colRef = collection(firestoreDb, 'users')

  onSnapshot(colRef, (snapshot) => {
    const posts = []
    snapshot.docs.forEach((doc) => {
      posts.push({ ...doc.data(), id: doc.id })
    })
    console.log(posts)
  })

  return (
        <>
            <HeaderCard/>
            <ProfilePage/>
        </>
  )
}
