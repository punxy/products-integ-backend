require('dotenv').config()
const { app } = require("./app")

if (require.main === module) {
	app.listen(process.env.NODE_PORT, () => console.log(`listening on port ${process.env.NODE_PORT}`))
}

module.exports.app = app