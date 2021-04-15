// For videos, use youtube
// For images, put them in the public>images folder and refer to them with
// '/images/yourimage.jpg' syntax.

export default {
  // Page Content
  page: {
    title: "David Gerdes: Discovering a New Planet"
  },

  // Main Content
  // example:
  // -- A video asset --
  // {
  //   title: "Meet Valeriy Ivanov",
  //   text: `Valeriy Ivanov, PhD, is Associate Professor in the Department of Civil and Environmental Engineering at the University of Michigan.\nSupported by the National Science Foundation.`,
  //   video: "https://youtu.be/lJrYeFYx374"
  // },
  // -- An image asset --
  // {
  //   title: "Field Site Location",
  //   text: `Ivanov currently works in Western Siberia in Russia, at the northern tip of the Polar Urals, or the southern peninsula of the Yamal region. The site is remote, so there is no human impact and it is far away from reindeer migration paths.`,
  //   image: {
  //     source: "images/yourimage.png",
  // -- Text to use for screen-readers or hover or image breakage --
  //     desc: "Map of locations and images of budget towers"
  //   }
  // },
  main: [
    {
      title: "Meet David Gerdes",
      text: `David Gerdes, PhD, is Arthur F. Thurnau Professor of Physics and Professor of Astronomy at the University of Michigan. \n
      Supported by the National Science Foundation and NASA.`,
      video: "https://youtu.be/EadcQwHT0B8"
    },
    {
      title: "The Dark Energy Survey",
      text: `The Dark Energy Survey (DES) is a project that observes 1/8 of the sky using a special 570-megapixel camera mounted on the 4-meter Blanco telescope located in the Chilean Andes.`,
      video: "https://youtu.be/GvoYv4J52s0",
    },
    {
      title: "Analyzing the DES data set",
      text: `The Dark Energy Survey has created a huge data set and uses powerful computers to analyze billions of objects in the sky.`,
      video: "https://youtu.be/-j6DlIN6pdY"
    },
    {
      title: "Distance",
      text: `Neptune represents the edge of the region of the solar system that contains planets, and it's about 30 times Earth's distance from the sun (30 au).`,
      image: {
        source: "/images/Gerdes_04a_Distance.png",
        desc: "Image that shows the Astronomical Unit distances of planets from the sun. Earth equals 1 AU, Mars equals 1.5 AU, Jupiter is 5 AU, Saturn is 9.5 AU, Uranus is 19 AU, Neptune is 30 AU, and DeeDee is 92 AU."
      }
    },
    {
      title: "Intelligent Life",
      text: `The solar system doesn't end at the four giant planets. This region is home to Pluto and other small objects called Kuiper Belt Objects, or Trans Neptunian Objects (TNOs).`,
      video: "https://youtu.be/thJjluG5fMA"
    },
    {
      title: "Discovering DeeDee",
      text: `An unusual data point found in the summer of 2016 led to a surprising discovery.`,
      video: "https://youtu.be/Ecqh7vt9e7E"
    },
    {
      title: "Collaborators",
      text: `A community of scientists around the world has collaborated on the Dark Energy Survery.`,
      video: "https://youtu.be/g77SXbzY8U4"
    },
    {
      title: "Meet Larissa Markwardt",
      text: `University of Michigan grad student Larissa Markwardt collects data with the Dark Energy Camera at Fermilab outside of Chicago.`,
      video: "https://youtu.be/JfdETM4Gmq4"
    },
  ],
  // Secondary Content
  // example:
  // Item with an accompanying image
  // {
  //   title: "Runaway melt",
  //   text: `In the far north, buried soil known as permafrost used to stay frozen year round. But the Arctic is warming more quickly than the rest of the planet. Each summer, more frozen land thaws for a longer time. Scientists are working to explain why the thaw is outpacing even their worst case predictions. The mystery is urgent--melting permafrost releases carbon dioxide, a gas that accelerates the pace of global warming.`,
  //   image: {
  //     source: "images/yourimage.png",
  // -- Text to use for screen-readers or hover or image breakage --
  //     desc: "Comparitive photos of treeline",
  // -- Text for small caption below image --
  //     caption:
  //       "Scientists remain puzzled why Arctic permafrost is melting more quickly than expected. Here, a chunk of coastal permafrost in Alaska drops into the sea.\nUSGS"
  //   }
  // },
  // Text-only item
  // {
  //   title: "Understanding the vicious cycle of global warming",
  //   text: `U-M researchers studying the warming Arctic witness firsthand the effects of climate change. They track the movement of heat energy from the Sun to air, water, and soil. They note the northward creep of the tree line, with shrubs and forests emerging where none have grown for thousands of years.\nThe carbon trapped in the permafrost is greater than that contained in the entire Amazon rainforest.\nCurrently, there is a vicious cycle, in which the Arctic warms, the permafrost thaws, //   carbon is released, and warming accelerates. U-M researchers led by Valeriy Ivanov are working with other partner universities to monitor feedback mechanisms accelerating Artic climate warming, and determine all the factors and interactions that are affecting the permafrost.`
  // }
  secondary: [
    {
      title: "DeeDee the Dwarf Planet",
      text: `The outermost region of our solar system contains several “dwarf planets,” including Pluto. Dwarf planets are very distant and faint, making them extremely difficult to detect. DeeDee, a dwarf planet only 400 miles in diameter, was discovered by U-M researchers in 2016, and named by one of the graduate students on that team.`,
      image: {
        source: "/images/PanelImage.png",
        desc: "Image of the dwarf planet DeeDee.",
        caption:
          `DeeDee is currently nearly three times farther from Earth than the solar system’s most famous dwarf planet, Pluto.\n
          Alexandra Angelich/NRAO/AUI/NSF`
      }
    },
    {
      title: "Some discoveries happen by accident",
      text: `David Gerdes’ team of U-M researchers were studying “dark energy,” the effects of which can only be seen by observing other galaxies far outside our own solar system. But their extremely sensitive camera also picked up hundreds of small, icy worlds much closer to home—in the cloud of dust, rocks, and planetoids known as the Kuiper Belt.\n
      One of these objects was an undiscovered dwarf planet orbiting far beyond Neptune, taking more than 1,100 years to circle the Sun. Graduate student Stephanie Hamilton nicknamed it “DeeDee,” short for “Distant Dwarf.”`
    }
  ],
  // Additional credit if needed
  credits: [
    // {
    //   image: "/images/nsfLogo.png",
    //   desc: "National Science Foundation Logo",
    //   link: "https://www.nsf.gov/"
    // }
  ]
};
