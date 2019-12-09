import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import _map from "lodash/map"

import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

const cuentosQuery = graphql`
  {
    posts: allDatoCmsCuento(sort: { fields: [meta___createdAt], order: ASC }) {
      edges {
        node {
          slug
          titulo
          autor
        }
      }
    }
  }
`

const Listado = () => {
  const data = useStaticQuery(cuentosQuery)
  const { edges } = data.posts

  return (
    <Layout>
      <SEO title="Listado de cuentos" />

      <Navigation />

      <div className="md:w-1/2 w-10/12 mx-auto bg-gray-300 mt-5 p-3 rounded-lg">
        <h1 className="text-2xl mb-5 mt-2">Todos los cuentos</h1>
        <div className="text-base mb-5">
          <p>
            Disfruta de un cuento corto en español. Todos los días se puede
            aprender de un buen cuento.
          </p>
        </div>

        {_map(edges, post => (
          <div key={post.node.slug}>
            <Link to={`/cuento/${post.node.slug}/`}>{post.node.titulo}</Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Listado
