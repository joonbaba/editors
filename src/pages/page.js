import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Home = () => {
	const router = useRouter()

	useEffect(() => {
		router.replace('tools/richtext')
	})

	return null
}

export default Home