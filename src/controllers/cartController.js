// Simpan cart di memory (sementara)
let cart = [];

// Ambil semua item di cart
const getCart = (req, res) => {
  res.json({ cart, total: cart.length });
};

// Tambah item ke cart
const addToCart = (req, res) => {
  const { idMeal, strMeal, strMealThumb, price } = req.body;

  // Cek apakah item sudah ada di cart
  const existingItem = cart.find(item => item.idMeal === idMeal);

  if (existingItem) {
    existingItem.quantity += 1;
    return res.json({ message: 'Jumlah item bertambah', cart });
  }

  const newItem = {
    idMeal,
    strMeal,
    strMealThumb,
    price: price || 25000,
    quantity: 1,
  };

  cart.push(newItem);
  res.status(201).json({ message: 'Item berhasil ditambahkan', cart });
};

// Hapus item dari cart
const removeFromCart = (req, res) => {
  const { id } = req.params;
  const itemExists = cart.find(item => item.idMeal === id);

  if (!itemExists) {
    return res.status(404).json({ message: 'Item tidak ditemukan' });
  }

  cart = cart.filter(item => item.idMeal !== id);
  res.json({ message: 'Item berhasil dihapus', cart });
};

// Kosongkan cart
const clearCart = (req, res) => {
  cart = [];
  res.json({ message: 'Cart berhasil dikosongkan' });
};

module.exports = { getCart, addToCart, removeFromCart, clearCart };