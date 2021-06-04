import React from "react";

function Products(props) {
  const ITEMS_PER_ROW = 2;

  const productList = [
    {
      title: 'Red Socks',
      price: 4.99,
      description: 'Soft Red Socks',
    },
    {
      title: 'Orange Socks',
      price: 4.99,
      description: 'Soft Orange Socks',
    },
    {
      title: 'Yellow Socks',
      price: 4.99,
      description: 'Soft Yellow Socks',
    },
    {
      title: 'Green Socks',
      price: 4.99,
      description: 'Soft Green Socks',
    },
    {
      title: 'Blue Socks',
      price: 4.99,
      description: 'Soft Blue Socks',
    },
    {
      title: 'Indigo Socks',
      price: 4.99,
      description: 'Soft Indigo Socks',
    },
    {
      title: 'Violet Socks',
      price: 4.99,
      description: 'Soft Violet Socks',
    },
    {
      title: 'White Socks',
      price: 4.99,
      description: 'Soft White Socks',
    },
    {
      title: 'Black Socks',
      price: 4.99,
      description: 'Soft Black Socks',
    },
    {
      title: 'Gold Socks',
      price: 4.99,
      description: 'Soft Shiny Gold Socks',
    },
  ];

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
          {/*!--display picture and price here -->*/}
          <div className="w3-row-padding">
            <div className="w3-half">
              <h4>{ product.title }</h4>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              {/* change to the path of the top level (where package.json is,
                  then react magically goes to the public dir - so link to
                  images from there
              */}
              <img src={"../../img/600_800_placeholder.png"}
                   className="placeholder"
                   alt="product image" />
            </div>
            <div className="w3-half">
              <p className="w3-text-blue-gray">{`$${product.price}`}</p>
            </div>
          </div>

          <div className="w3-row-padding">
            <div className="w3-half">
              { product.description }
            </div>
          </div>
        </div>
      );
    } // end createProductCard

    const productLists = createList(products);
    return (
      <div className="w3-row-padding">
        {createRow(productLists)}
      </div>
    );
  }


  /**
   * @param {[]} products
   */
  function buildList(products) {
    // turn list into array of 3's
    const newList = createList(products);

    const rows = newList.map((productRow, rowIndex) => {
      const rowCards = productRow.map((product, productIndex) => {
        return (
          <div className="w3-col m4 l4" key={`product-${rowIndex}-${productIndex}`}>
            <div className="w3-container w3-sand">
              <div className="w3-center">{product.title}</div>
              <div className="w3-right">${product.price}</div>
            </div>

            <div className="w3-container">
              {product.description}
            </div>
          </div>
        );
      });

      return (
        <div className="w3-row-padding w3-margin-bottom" key={`row-${rowIndex}`}>
          {rowCards}
        </div>
      );
    });

    return (
      <div className="w3-container">
        {rows}
      </div>
    )
  };

  return buildProductList(productList);
}

export default Products;
