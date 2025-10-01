import Head from "next/head";

export default function Home() {

  return (
    <>
      <Head>
        <link rel="icon" href="/icons/icon.png" />
      </Head>

      <section className="text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Hi, I'm Tejashwin</h2>
        <p className="text-lg text-gray-600">Software Engineer | Personal Blog</p>
      </section>
    </>
  );
}
