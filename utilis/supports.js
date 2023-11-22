export const fetchQuery = `*[_type == 'books'] | order(_createdAt desc){
    _id,
    title,
    productType,
    mainImage {
    asset -> {
       url
      }
    },
     mainImage {
      asset -> {
        url
      }
     },     
    bgImage {
      asset -> {
        url
      }
  },
    shortDescription,
      description,
      price,
    categories [] -> {
      _id,
      title,
      mainImage {
      asset -> {
        url
      }
     },  
    }
  }
  `