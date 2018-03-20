class PreviousButton extends React.Component {
  clickHandler = event => {
    event.preventDefault();

    let newPage = this.props.currentPage - 1;
    this.props.onClick(newPage);
  };

  render() {
    return (
      <a
        className={`button is-info is-rounded`}
        onClick={this.clickHandler}
        disabled={this.props.currentPage <= 1}
      >
        <span className="icon is-small">
          <i className="fas fa-chevron-left" />
        </span>
        <span>Prev.</span>
      </a>
    );
  }
}
