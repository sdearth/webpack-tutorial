import Heading from "./components/heading/heading.js"
import KiwiImage from "./components/kiwi-image/kiwi-image.js"
import _ from "lodash"

const heading = new Heading()
heading.render()
const kiwiImage = new KiwiImage()
kiwiImage.render(_.upperFirst("kiwi image"))
