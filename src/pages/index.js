import React from "react"

import Navigation from "../components/navigation"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Cuentos en español para niños de todas las edades" />
      <Navigation />

      <div className="md:w-1/2 w-10/12 mx-auto bg-gray-300 mt-5 p-3 rounded-lg">
        <h1 className="text-2xl mb-5 mt-2">{data.datoCmsInicio.titulo}</h1>
        <div
          className="text-base mb-5"
          dangerouslySetInnerHTML={{ __html: data.datoCmsInicio.introduccion }}
        />
        <img
          src={data.datoCmsInicio.fotoPrincipal.fluid.src}
          alt={data.datoCmsInicio.fotoPrincipal.alt}
          className="rounded"
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query HomePage {
    datoCmsInicio {
      titulo
      introduccion
      fotoPrincipal {
        alt
        fluid {
          src
        }
      }
    }
  }
`

export default IndexPage
