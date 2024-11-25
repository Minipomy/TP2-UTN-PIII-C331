module.exports = {
    index: (req,res)=>{
      res.render("main",{
        title: "API - Hardware Products",
        name : "Welcome to the best API of Hardware Products!",
      })
    }
}