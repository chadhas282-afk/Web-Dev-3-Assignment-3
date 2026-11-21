const validateProductInput = (req, res, next) => {
  const { name, sku, category, price, quantity, supplier } = req.body;

  if (req.method === 'POST') {
    if (!name || !sku || !category || price === undefined || quantity === undefined || !supplier) {
      res.status(400);
      return next(new Error('Please provide all required fields: name, sku, category, price, quantity, supplier'));
    }
  }

  if (price !== undefined && (typeof price !== 'number' || price < 0)) {
    res.status(400);
    return next(new Error('Price must be a non-negative number'));
  }

  if (quantity !== undefined && (typeof quantity !== 'number' || quantity < 0)) {
    res.status(400);
    return next(new Error('Quantity must be a non-negative number'));
  }

  next();
};

const validateStockAdjustment = (req, res, next) => {
  const { change } = req.body;

  if (change === undefined || typeof change !== 'number' || change === 0) {
    res.status(400);
    return next(new Error('Please provide a valid non-zero numeric change value'));
  }

  next();
};

module.exports = {
  validateProductInput,
  validateStockAdjustment
};
