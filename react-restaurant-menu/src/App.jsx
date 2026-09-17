import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MenuListSection from './components/MenuListSection'

function App() {
  const breads = [
    {
      name: 'Country Sourdough',
      description: 'Naturally leavened rustic loaf with a crisp crust and mild tang.',
      price: '$7.00'
    },

    {
      name: 'Cinnamon Swirl Bread',
      description: 'Soft enriched bread with cinnamon and brown sugar.',
      price: '$8.00'
    },

    {
      name: 'Multigrain Sandwich Loaf',
      description: 'Soft sandwich bread made with oats, sunflower seeds, and whole grains.',
      price: '$7.50'
    },

    {
      name: 'Rosemary Sea Salt Focaccia',
      description: 'Olive oil focaccia finished wit rosemary and flaky sea salt.',
      price: '$6.50'
    }
  ]

  const pastries = [
    {
      name: 'Butter Croissant',
      description: 'Classic flaky butter croissant.',
      price: '$4.00'
    },

    {
      name: 'Chocolate Croissant',
      description: 'Butter croissant filled with dark chocolate.',
      price: '$4.75'
    },

    {
      name: 'Seasonal Fruit Danish',
      description: 'Laminated pastry with pastry cream and rotating seasonal fruit.',
      price: '$4.50'
    },

    {
      name: 'Cinnamon Roll',
      description: 'Soft cinnamon roll finished with vanilla glaze.',
      price: '$4.50'
    },

    {
      name: 'Blueberry Muffin',
      description: 'Buttermilk muffin with blueberries and a crumb topping.',
      price: '$3.75'
    }
  ]

  return (
    <div id="container">
      <Header />

      <h2>Breads</h2>
      <MenuListSection menuItems={breads} />

      <h2>Pastries</h2>
      <MenuListSection menuItems={pastries} />
      <Footer />
    </div>
  )
}

export default App
