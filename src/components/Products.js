import React, {useEffect, useState} from "react";
import Modal from "./Modal";
import ModalSlideShow from "./ModalSlideShow";

const productList = [
  {
    title: 'Red Socks',
    price: 4.99,
    description: 'These Soft Red Socks will make you want to dance',
    id: 100,
  },
  {
    title: 'Orange Socks',
    price: 4.99,
    description: 'These Soft Orange Socks will make you want to dance' +
      '. They feel like wearing fluffy oranges on your feet and that you' +
      'll never want to take off',
    id: 101,
  },
  {
    title: 'Yellow Socks',
    price: 4.99,
    description: 'These Soft Yellow Socks will make you want to mellow out',
    id: 102,
  },
  {
    title: 'Green Socks',
    price: 4.99,
    description: 'Soft Green Socks',
    id: 103,
  },
  {
    title: 'Blue Socks',
    price: 4.99,
    description: 'Soft Blue Socks',
    id: 104,
  },
  {
    title: 'Indigo Socks',
    price: 4.99,
    description: 'Soft Indigo Socks',
    id: 105,
  },
  {
    title: 'Violet Socks',
    price: 4.99,
    description: 'Soft Violet Socks',
    id: 106,
  },
  {
    title: 'White Socks',
    price: 4.99,
    description: 'Soft White Socks',
    id: 107,
  },
  {
    title: 'Black Socks',
    price: 4.99,
    description: 'Soft Black Socks',
    id: 108,
  },
  {
    title: 'Gold Socks',
    price: 4.99,
    description: 'Soft Shiny Gold Socks',
    id: 109,
  },
  {
    title: 'Silver Socks',
    price: 4.99,
    description: 'Hard & uncomfortable Shiny Silver Socks',
    id: 110,
  },
  {
    title: 'Rainbow Socks',
    price: 4.99,
    description: 'Crunch Rainbow Socks',
    id: 112,
  },
];

function getProductSlides(product) {
  if (product?.id !== undefined) {
    return [
      '../../img/product-placeholder-1.jpg',
      '../../img/product-placeholder-2.jpg',
      '../../img/product-placeholder-3.jpg',
    ];
  }

  return [];
}

function Products() {
  const ITEMS_PER_ROW = 2;

  const [clickedProduct, setClickedProduct] = useState({});

  /**
   *
   * @param {[]} products
   */
  function createList(products) {
    let newList = [];
    let newRow = [];

    products.forEach((product) => {
      if (newRow.length === ITEMS_PER_ROW) {
        newList.push(newRow);

        newRow = [];
        newRow.push(product);
        return;
      }

      newRow.push(product);
    });

    if (newRow.length > 0) {
      newList.push(newRow);
    }

    return newList;
  }

  /** @param {[]} products */
  function buildProductList(products) {
    /**
     * @description render the row - this will contain 2 products
     * @param {[]} row
     * @return {[JSX.Element]}
     */
    function createRow(row) {
      let rowWithProducts = row.map((products) => {
        return products.map(createProductCard);
      });

      return rowWithProducts;
    }

    /**
     * this card will render one half of the row (6 columns)
     * @param {Object} product
     * @return {JSX.Element}
     */
    function createProductCard(product) {
      return (
        <div className="w3-col w3-half" key={`${product.price}-xyz-${product.title}`}>
          {/*<!--display picture and price here -->*/}
          <div className="w3-row">
            <div className="w3-container w3-half">
              {/* change to the path of the top level (where package.json is,
                  then react magically goes to the public dir - so link to
                  images from there
              */}
              <img src={"../../img/600_800_placeholder.png"}
                   className="placeholder"
                   alt={`${product.title}`}
                   onClick={ () => displayProductModal(product) }
              />
            </div>
            <div className="w3-container w3-half">
              <h4>{ product.title }</h4>

              <p className="w3-text-blue-gray">{`$${product.price}`}</p>
            </div>
          </div>

          {/* <!-- display the product desc here --> */}
          <div className="w3-row">
            <div className="w3-container">
              <p>{ product.description }</p>
            </div>
          </div>
        </div>
      );
    } // end createProductCard

    const productLists = createList(products);
    return (
      <div>
        {/* modal will always be rendered, just hidden */}
        <Modal title={clickedProduct.title ?? ''}
               closeModal={closeModal}>
          <ModalSlideShow
            product={clickedProduct}
            productSlides={getProductSlides(clickedProduct)} />
        </Modal>
        <div className="w3-row">
          {createRow(productLists)}
        </div>
      </div>
    );
  }

  function displayProductModal(product) {
    setClickedProduct(product);
  }

  function closeModal() {
    setClickedProduct({});
  }

  // RENDER
  return buildProductList(productList);
}

export default Products;
