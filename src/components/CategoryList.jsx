import React, { useContext } from 'react'
import { Category } from './Category'
import { GlobalContext } from '../context/GlobalState'


export const CategoryList = () => {

    const { transactions } = useContext(GlobalContext)

    const categories = [...new Set(transactions.map(each => each.category))]

    function getTotal(category) {
        let numTrans = transactions.filter(each => each.category === category)
        const amounts = numTrans.map(transaction => transaction.amount);
        const total = amounts.reduce((sum, curr) => sum + curr, 0).toFixed(2);
        return total
    }
    

  return (
    <>
        <h3>Categories</h3>
        <ul className='list'>
          {categories.map(category => (<Category category={category} balance={getTotal(category)} />))}
        </ul>
    </>
  )
}
