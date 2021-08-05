import { React, useState } from 'react'
import MainNavigation from '../components/MainNavigation'
import Products from '../components/Products'
import Sidebar from '../components/Sidebar'
import mensData from '../menProducts'
import womensData from '../womenProducts'
import childrensData from '../childrenProducts'

const HomePage = () => {

    const [categoryData, setCategoryData] = useState(mensData)

    const categoryHandler = category => {
        if (category === 'category1') setCategoryData(mensData)
        if (category === 'category2') setCategoryData(womensData)
        if (category === 'category3') setCategoryData(childrensData)
    }

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar categoryHandler={categoryHandler} />
            <Products productData={categoryData} />
        </div>
    )
}

export default HomePage
