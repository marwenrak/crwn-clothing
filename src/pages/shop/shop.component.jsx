import React from 'react';
import ReactDOM from "react-dom";
import SHOP_DATA from "./shop.data";
import CollectionPreview from '../../components/collection-preview/collection-priview.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }


    render() {
        const collection = this.state.collections;

        return (

            <div className='shop-page'>

                {

                    collection.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    ))


                }


            </div>
        );
    }


}

export default ShopPage;