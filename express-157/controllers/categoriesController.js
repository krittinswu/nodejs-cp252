let categories = [];

const getCategories = (req, res) => {

  if (!categories || categories.length === 0) {
    return res.json({ categories: ['unknown'] });
  }

  res.json({ categories });
};

module.exports = {
  getCategories,
};