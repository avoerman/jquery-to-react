class NextButton extends React.Component {
  clickHandler = event => {
    event.preventDefault();

    let newPage = this.props.currentPage + 1;
    this.props.onClick(newPage);
  };

  render() {
    const { totalPages, currentPage } = this.props;

    return (
      <a
        className={`button is-info is-rounded`}
        onClick={this.clickHandler}
        disabled={totalPages <= 1 || currentPage >= totalPages}
      >
        <span>Next</span>
        <span className="icon is-small">
          <i className="fas fa-chevron-right" />
        </span>
      </a>
    );
  }
}
