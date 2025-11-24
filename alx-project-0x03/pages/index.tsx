import Layout from '@/components/layouts/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="pt-24 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Welcome to Splash App
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your one-stop platform for all your needs. Connecting people, creating opportunities.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home