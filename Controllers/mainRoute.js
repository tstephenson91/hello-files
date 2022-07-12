const router= require("express").Router()

let staticServer = express.static('')
router.use(staticServer)

router.get("/", (req, res)) => {
    response.sendFile('index.html', {root:process.cwd()})

}

router.get("/", (req, res) => {
    res.send("<h1>Hello, <b>home!</b></h1>")
})

router.get("/login", (req, res) => {
    res.send("login route hit")
})

router.get("/signup", (req, res) => {
    res.send("signup route hit")
})

router.get("/logout", (req, res) => {
    res.send("Logged out!")
})

router.get('/:page', (request,response)=>{
    console.log(request.params)
  })

module.exports = router