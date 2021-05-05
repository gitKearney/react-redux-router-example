import React from "react";

function Products(props) {
  const ITEMS_PER_ROW = 3;

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
  const createList = (products) => {
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
  };

  /**
   *
   * @param {[]} products
   */
  const buildList = (products) => {
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

  const prs = buildList(productList);

  return (
    <div className="w3-content">
      {prs}
    </div>
  )
}

export default Products;
