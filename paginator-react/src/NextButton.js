class NextButton extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  isDisabled(page, totalPages) {
    return totalPages <= 1 || page >= totalPages;
  }

  showHideClass(pageNum, totalPages) {
    return this.isDisabled(pageNum, totalPages) ? 'button-hidden' : '';
  }

  clickHandler(event) {
    event.preventDefault();

    const newPage = this.props.currentPage + 1;
    this.props.onClick(
      newPage > this.props.totalPages ? this.props.totalPages : newPage
    );
  }

  render() {
    let hideNav = this.showHideClass(
      this.props.currentPage,
      this.props.totalPages
    );

    return (
      <a className={`button is-info ${hideNav}`} onClick={this.clickHandler}>
        <span className="nav-icon icon-right">Next</span>
      </a>
    );
  }

  preventDefault(e) {
    return e.preventDefault();
  }
}
