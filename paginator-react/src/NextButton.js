class NextButton extends React.Component {
  isDisabled = ({ totalPages, currentPage }) =>
    totalPages <= 1 || currentPage >= totalPages;

  clickHandler = event => {
    event.preventDefault();

    if (this.isDisabled(this.props)) {
      return;
    }

    let newPage = this.props.currentPage + 1;
    this.props.onClick(newPage);
  };

  render() {
    const { totalPages, currentPage } = this.props;

    return (
      <a
        className={`button is-info is-rounded`}
        onClick={this.clickHandler}
        disabled={this.isDisabled(this.props)}
      >
        <span>Next</span>
        <span className="icon is-small">
          <i className="fas fa-chevron-right" />
        </span>
      </a>
    );
  }
}
