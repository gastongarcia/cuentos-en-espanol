const path = require("path")

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const results = await graphql(`
    query BlogPosts {
      allDatoCmsCuento {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (results.error) {
    console.log("Something went wrong fetching the initial slug in graphql")
    return
  }

  results.data.allDatoCmsCuento.edges.forEach(edge => {
    const post = edge.node

    createPage({
      path: `/cuento/${post.slug}`,
      component: require.resolve("./src/templates/cuentos.js"),
      context: {
        slug: post.slug,
      },
    })
  })
}
