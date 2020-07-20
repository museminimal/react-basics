import React from 'react';

class Blog extends React.Component {
  renderItems() {
    return this.props.items.map(function(item) {
      return (
        <div class="blog__item">
          <div class="item__title">
            { item.title }
          </div>

          <div class="item__description">
            { item.description }
          </div>
        </div>
      );
    });
  }

  getTitle() {
    return this.props.title;
  }

  render() {
    return (
      <section class="blog">
        <h5 class="blog__title">
          { this.getTitle() }
        </h5>

        <div class="blog__items">
          { this.renderItems() }
        </div>
      </section>
    );
  }
}

export default Blog;
