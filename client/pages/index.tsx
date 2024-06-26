import Container from '@/components/customs/Container'
import UrlShortForm from '@/components/customs/UrlShortForm'
import UrlsList from '@/components/customs/UrlsList'
import Head from 'next/head'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>.NET Core & Nextjs URL Shortener</title>
      </Head>
      <h1 className="text-xl font-bold mt-2 mb-5">.NET Core & Nextjs URL Shortener</h1>
      <UrlShortForm />
      <UrlsList />
    </Container>
  )
}
