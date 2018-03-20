class PreviousButton extends React.Component {
  isDisabled = ({ currentPage }) => currentPage <= 1;

  clickHandler = event => {
    event.preventDefault();

    if (this.isDisabled(this.props)) {
      return;
    }

    let newPage = this.props.currentPage - 1;
    this.props.onClick(newPage);
  };

  render() {
    return (
      <a
        className={`button is-info is-rounded`}
        onClick={this.clickHandler}
        disabled={this.isDisabled(this.props)}
      >
        <span className="icon is-small">
          <i className="fas fa-chevron-left" />
        </span>
        <span>Prev.</span>
      </a>
    );
  }
}
