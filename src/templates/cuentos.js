import React from "react"
import { graphql } from "gatsby"

import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    datoCmsCuento(slug: { eq: $slug }) {
      titulo
      elCuento
      autor
    }
  }
`

const Post = ({ data }) => {
  const post = data.datoCmsCuento

  return (
    <Layout>
      <SEO title={post.titulo} />

      <Navigation />

      <div className="md:w-1/2 w-10/12 mx-auto bg-gray-300 mt-5 p-3 rounded-lg">
        <h1 className="text-2xl mb-3 mt-2">{post.titulo}</h1>
        <p className="text-xl">Por: {post.autor}</p>
        <div
          dangerouslySetInnerHTML={{ __html: post.elCuento }}
          className="mt-5 mb-10"
        />
      </div>
    </Layout>
  )
}

export default Post
