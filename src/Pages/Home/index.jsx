import { useContext } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail from '../../Components/ProductDetail'
import { ShoppingCartContext } from '../../Context'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    const hasSearch = context.searchByTitle?.length > 0 || context.searchByCategory?.length > 0;
  
    if (hasSearch) {

      if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map(item => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return (
          <div className='flex flex-col justify-center items-center h-full w-full'>
            <img 
              className='w-full h-auto max-w-xs object-cover rounded-lg mb-4' 
              src='../../Images/Cry.jpg'
            />
            <div className='flex items-center justify-center relative w-80'>
              <h1 className='font-medium text-xl'>
                We don't have anything
              </h1>
            </div>
          </div>
        );
      }
    } else {
        return context.items?.map(item => (
          <Card key={item.id} data={item} />
      ));
    }
  };

  const view = renderView();
  
  if (Array.isArray(view) && view.length > 0) {
    return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-xl'>Exclusive products</h1>
        </div>
        <input 
          type='text' 
          placeholder='Search a product'
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value)}
          />
          <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {renderView()}
          </div>
        <ProductDetail />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className='font-medium text-xl'>Exclusive products</h1>
        </div>
        <input 
          type='text' 
          placeholder='Search a product'
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
          onChange={(event) => context.setSearchByTitle(event.target.value)}
          />
          <div className='grid gap-4 w-full max-w-screen-lg'>
            {renderView()}
          </div>
        <ProductDetail />
      </Layout>
    )
  }
}

export default Home
