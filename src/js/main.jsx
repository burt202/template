const React = require("react")
const PropTypes = require("prop-types")

require("../css/app.css")

function Main(props) {
  return <div>Hello world v{props.version}</div>
}

Main.propTypes = {
  version: PropTypes.string.isRequired,
}

module.exports = Main
