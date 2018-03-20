class PreviousButton extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  isDisabled(pageNum) {
    return pageNum <= 1;
  }

  showHideClass(pageNum) {
    return this.isDisabled(pageNum) ? 'button-hidden' : '';
  }

  clickHandler(event) {
    event.preventDefault();

    const newPage = this.props.currentPage - 1;
    this.props.onClick(newPage < 1 ? 1 : newPage);
  }

  render() {
    let hideNav = this.showHideClass(this.props.currentPage);

    return (
      <a className={`button is-info ${hideNav}`} onClick={this.clickHandler}>
        <span className="nav-icon icon-left">Prev.</span>
      </a>
    );
  }
}
