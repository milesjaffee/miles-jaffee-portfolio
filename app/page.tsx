import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Miles Jaffee
      </h1>
      <p className="mb-4">
        {`I'm a second-year student at Lehigh University in the IDEAS program, a prestigious honors program focusing on interdisciplinary studies. My concentration (equivalent to a BS engineering major, if you must know) is in computer science. I'm passionate about the tech world, especially web and frontend development, where I have developed a number of personal projects.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
