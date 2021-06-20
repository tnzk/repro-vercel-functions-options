<script>
  export let input = '';
</script>
<form action="/search" name="searcha" method="get">
      <dl class="search">
        <dt><input type="text" name="q" bind:value="{input}" placeholder="Search by category, manufacturer name, product number." /></dt>
        <dd><button><span></span></button></dd>
      </dl>
    </form>

<style lang="scss">
form,.dummy-form {
  width: 100%;
  dl.search {
    position: relative;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 4px;
    > dt {
      margin-right: 3.8rem;
      padding: 3px 0 3px 8px;
      > input {
        width: 100%;
        height: 2em;
        line-height: 2em;
        background: none;
        border: none;
        color: #000;
        font-weight: normal;
        font-size: 1.6rem;
        &::placeholder {
          color: #9b9b9b;
        }
      }
    }
    > dd {
      position: absolute;
      top: 0;
      right: 0;
      > button {
        display: block;
        padding: 0.65rem;
        background: none;
        border: none;
        > span {
          display: block;
          width: 2.5rem;
          height: 2.5rem;
          background: url('../../static/assets/search-solid.svg') no-repeat center center;
        }
      }
    }
  }
}</style>
