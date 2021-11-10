const productsStore = localStorageUtil.getProducts()
headerPage.render(productsStore.length)

class Shopping {

  render () {
    const productsStore = localStorageUtil.getProducts()
    let htmlCatalog = ''
    let sumCatalog = 0

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(id) !== - 1) {
        htmlCatalog += `
        <tr>
          <td class="shopping__element--name">${name}</td>
          <td class="shopping__element--price">${price} сом</td>
        </tr>
      `
      sumCatalog += price 
      }
    })


   
    const html = `
      <div class="shopping_container">
      <div class="shopping__close" onclick="shoppingPageClose">
      <img  src="componenets/shopping/krest.svg" alt=" " />
      </div>
        <table>
          ${htmlCatalog}

          <tr>
          <td class="shopping__element--name">Сумма </td>
          <td class="shopping__element--price">${sumCatalog.toLocaleString()} </td>
          </tr>
        </table>
      </div>
    `

    ROOT_SHOPPING.innerHTML = html
  }
}

const shoppingPage = new Shopping()
