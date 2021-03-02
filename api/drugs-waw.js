const drugsData = require('./drugs-data-apteka-waw.json.json');

module.exports = (req, res) => {
  const { ean } = req.query;
  const drugData = drugsData[ean];

  if (!drugData) {
    res.status(404).send('Not found');
  }

  const data = {
    baseUrl: 'https://',
    name: drugData.name,
    'package': drugData.package,
    ean: drugData.ean,
    imagePaths: drugData.imagePaths
  };

  res.status(200).send(data);
}
