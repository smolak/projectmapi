const drugsData = require('./drugs-data-apteka-waw.json');

module.exports = (req, res) => {
  const { ean } = req.query;
  const drugData = drugsData[ean];

  if (!drugData) {
    res.status(404).send('Not found');
  }

  const data = {
    name: drugData.name,
    'package': drugData.package,
    ean: drugData.ean,
    imagePaths: {
      big: 'https://aptekawaw.pl/' + drugData.imagePaths.big,
      small: 'https://aptekawaw.pl/' + drugData.imagePaths.small,
    }
  };

  res.status(200).send(data);
}
