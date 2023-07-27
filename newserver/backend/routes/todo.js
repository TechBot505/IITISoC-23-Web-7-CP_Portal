const router = require("express").Router();
const Todu = require('../models/Todu');

const User= require('../models/User');
router.post('/add/todo/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).populate('user','todus');
  console.log(user);
  const { todo,fodo } = req.body;
  const todu = new Todu({name:todo,link:fodo  });
  user.todus.push(todu);
  console.log(user);
  todu.user= user;
  await user.save();
 
  await todu.save()
      
      .then(() => {
        console.log("Successfully added todo!");
        res.redirect("/main");
      })
  
})
// routes
router
  .post("/add/todo", (req, res) => {
    const { todo,fodo } = req.body;
    const newTodu = new Todu({ name:todo,link:fodo });

    // save the todo
    newTodu
      .save()
      .then(() => {
        console.log("Successfully added todo!");
        res.redirect("/problem");
      })
      .catch((err) => console.log(err));
  })

  .get("/delete/todo/:_id", (req, res) => {
    const { _id } = req.params;
    Todu.deleteOne({ _id })
      .then(() => {
        console.log("Deleted Todu Successfully!");
        res.redirect("/please");
      })
      .catch((err) => console.log(err));
  });

module.exports = router;