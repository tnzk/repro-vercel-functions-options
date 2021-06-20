<script>
</script>
<div id="footer">
  <ul id="footer__nav">
    <li><a href="">About US</a></li>
    <li><a href="">Terms of Use</a></li>
    <li><a href="">Contact</a></li>
  </ul>
</div>

<style lang="scss">
  #footer {
  width: 100%;
  // position: absolute;
  bottom: 0;
  background: #f0f0f0;
  padding: 5rem;
  font-size: 1.3rem;
  &.no-fix {
    position: static;
  }
  &__nav {
    display: flex;
    li {
      margin-right: 3em;
      a:hover {
        text-decoration: underline;
      }
    }
  }
}
@media screen and (max-width: 599px) {
  #footer {
    &__nav {
      flex-direction: column;
    }
  }
}
</style>
