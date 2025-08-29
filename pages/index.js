import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pinky Promise - Creator Commitments</title>
        <meta name="description" content="A subscription platform for creators to make and keep promises to their audiences" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-8">
              🤙 Pinky Promise
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              The subscription platform where creators make real commitments to their audience. 
              Track promises, build trust, grow your community.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Make Promises</h3>
                <p className="text-gray-600">Commit to your audience with clear, trackable promises</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Build Trust</h3>
                <p className="text-gray-600">Show your commitment through transparent promise tracking</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibent mb-4">Grow Revenue</h3>
                <p className="text-gray-600">Subscription-based model rewards consistent creators</p>
              </div>
            </div>

            <div className="mt-12">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 px-8 rounded-lg text-lg">
                Coming Soon - Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
