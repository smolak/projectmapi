const drugsData = require('./drugs-data-apteka-gold.json');

module.exports = (req, res) => {
  const { ean } = req.query;
  const drugData = drugsData[ean];

  if (!drugData) {
    res.status(404).send('Not found');
  }

  const data = {
    name: drugData.name,
    'package': drugData.package,
    ean: drugData.ean
  };

  res.status(200).send(data);
}
