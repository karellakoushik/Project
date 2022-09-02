const router = require('express').Router();
let Domain = require('../Models/DomainSchema');

router.route('/').get((req, res) => {
  Domain.find()
    .then(domains => res.json(domains))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const domainname = req.body.domainname;
  
  const newDomain = new Domain({domainname});

  newDomain.save()
  .then(() => res.json('Domain added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Domain.findById(req.params.id)
    .then(domain => res.json(domain))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Domain.findByIdAndDelete(req.params.id)
    .then(() => res.json('Domain deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/update/:id').post((req, res) => {
//   Domain.findById(req.params.id)
//     .then(domain => {
//       domain.domainname = req.body.domainname;
//      

//       domain.save()
//         .then(() => res.json('Domain updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;