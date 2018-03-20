class PreviousButton extends React.Component {
  clickHandler = event => {
    event.preventDefault();

    let newPage = this.props.currentPage - 1;
    newPage = newPage >= 1 ? newPage : 1;

    this.props.onClick(newPage);
  };

  render() {
    const hideBtn = this.props.currentPage <= 1 ? 'is-hidden' : '';

    return (
      <a
        className={`button is-info is-rounded ${hideBtn}`}
        onClick={this.clickHandler}
      >
        <span className="icon is-small">
          <i className="fas fa-chevron-left" />
        </span>
        <span>Prev.</span>
      </a>
    );
  }
}
