class NextButton extends React.Component {
  clickHandler = event => {
    event.preventDefault();

    let newPage = this.props.currentPage + 1;
    newPage = newPage > this.props.totalPages ? this.props.totalPages : newPage;

    this.props.onClick(newPage);
  };

  render() {
    const { totalPages, currentPage } = this.props;
    const hideBtn =
      totalPages <= 1 || currentPage >= totalPages ? 'is-hidden' : '';

    return (
      <a
        className={`button is-info is-rounded ${hideBtn}`}
        onClick={this.clickHandler}
      >
        <span>Next</span>
        <span className="icon is-small">
          <i className="fas fa-chevron-right" />
        </span>
      </a>
    );
  }
}
