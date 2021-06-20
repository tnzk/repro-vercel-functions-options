<script>
  export let itemName;
	export let itemImg;
	export let itemTitle;
	export let itemCategory;
  export let itemManufacturer;
	export let itemData;
	export let itemReferenceCode;
	export let itemWebsite;
  export let itemWebsiteUrl;
  export let itemPrice;

</script>

<div class="data-item">
        <h2>{itemName}</h2>
        <div class="data-item__row">
          <img src="{itemImg}" alt="item-img">
          <table>
            <tbody>
              <tr>
                <th>Title</th>
                <td>{itemTitle}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{itemCategory}</td>
              </tr>
              <tr>
                <th>Manufacturer</th>
                <td>{itemManufacturer}</td>
              </tr>
              <tr>
                <th>Data</th>
                <td>{itemData}</td>
              </tr>
              <tr>
                <th>Reference code</th>
                <td>{itemReferenceCode}</td>
              </tr>
              <tr>
                <th>Website</th>
                <td class="blank">{itemWebsite}</td>
              </tr>
              <tr>
                <th>Price</th>
                <td>{itemPrice}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <a href="{itemWebsiteUrl}" class="card-link" target="_blank"></a>
      </div>

<style lang="scss">
  .data-item {
  border: 1px solid #c2c2c2;
  border-radius: 6px;
  padding: 1em;
  position: relative;
  margin-bottom: 1em;
  width: 100%;
  max-width: 56.4rem;
  a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &:hover {
      border-radius: 6px;
      box-shadow: 0 5px 40px -10px rgba(0, 0, 0, 0.4);
    }
  }
  &__row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  h2 {
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 1em;
  }
  img {
    width: 14.4rem;
    height: 14.4rem;
    object-fit: contain;
  }
  table {
    width: 80%;
    font-size: 1.4rem;
    margin-left: 1em;
    table-layout: fixed;
    tr {
      &:nth-child(odd) {
        background: rgba(0, 0, 0, 0.03);
      }
    }
    th,
    td {
      padding: 0.2em 1em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    th {
      padding-right: 0;
      width: 40%;
    }
    td{
      width: 60%;}
  }
}
@media screen and (max-width: 768px) {
  .data-item {
    margin: .5em auto;
      &__row {
flex-direction: column;
justify-content: center;
  }
    img {
      width: 100%;
      min-height: 10rem;
      object-fit: contain;
      margin-bottom: 1em;
    }
      table {
    width: 100%;
    // font-size: 1.4rem;
    margin-left: 0;
    // table-layout: auto;
    // tr {
    //   &:nth-child(odd) {
    //     background: rgba(0, 0, 0, 0.03);
    //   }
    // }
    // th,
    // td {
    //   padding: 0.2em 1em;
    // }
    // th {
    //   padding-right: 0;
    // }
  }
  }
}
</style>
