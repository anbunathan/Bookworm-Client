import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import { allBooksSelector } from "../../reducers/books";
import AddBookCtA from "../ctas/AddBookCtA";

const DashboardPage = ({isConfirmed, books}) => {
    return (
        <div>
            {!isConfirmed && <ConfirmEmailMessage />}
            {books.length === 0 ? <AddBookCtA /> : <p>You have books!</p>}
        </div>
    );
};

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    books: allBooksSelector(state)
  };
}

export default connect(mapStateToProps)(DashboardPage);





