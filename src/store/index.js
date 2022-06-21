import { createStore } from 'vuex'

export default createStore({
  state: {
    navItems: [
      {
        image: "tile_lions.jpg",
        title: "Detroit Lions Ticket Finder",
        subtitle: "Explore the Site",
        path: "https://ticketfinder.detroitlions.com/",
      },
      {
        image: "tile_enmarket.jpg",
        title: "Enmarket Arena",
        subtitle: "Explore the Site",
        path: "https://enmarketarena.vipfanportal.com/",
      },
       {
        image: "tile_jays.jpg",
        title: "Blue Jays Ticket Finder",
        subtitle: "Explore the Site",
        path: "https://brewers.fanportal-mlb.com/2022-10packs/",
      },      
      {
        image: "tile_smi.jpg",
        title: "Speedway Motorsports",
        subtitle: "Explore the Site",
        path: "https://speedwaypartner.com",
      },
      {
        image: "tile_allegiant.jpg",
        title: "Allegiant Stadium",
        subtitle: "Explore the Site",
        path: "http://allegiant-stadium.vipfanportal.com/entertainment/",
      },
      {
        image: "tile_clippers.jpg",
        title: "Los Angeles Clippers",
        subtitle: "Explore the Site",
        path: "https://clippers.vipfanportal.com/salesportal/",
      },
      /*
      {
        image: "tile_brewers.jpg",
        title: "Milwaukee Brewers",
        subtitle: "Explore the Site",
        path: "https://brewers.fanportal-mlb.com/2022-10packs/",
      },
      */
      /*
      {
        image: "tile_lower.jpg",
        title: "lower.com Field",
        subtitle: "Explore the Site",
        path: "https://www.lowerfieldcbus.com/",
      },
      */
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
