import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import * as imagesApi from '../services/images-api';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import styles from '../App/App.module.css';

export default class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    images: [],
    pageNumber: 1,
    search: '',
    error: '',
    isLoading: false,
    isModalOpen: false,
    largeImageId: null,
    largeImage: '',
  };

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search) {
      this.fetchImages(false);
    }
  }

  onSearch = search => {
    this.setState({ search, images: [], pageNumber: 1 });
  };

  fetchImagesWithScroll = () => {
    this.fetchImages(true);
  };

  fetchImages = scroll => {
    this.setState({ isLoading: true });
    const { search, pageNumber } = this.state;
    imagesApi
      .fetchImages(search, pageNumber)
      .then(images => {
        this.setState(state => ({
          images: [...state.images, ...images],
          pageNumber: state.pageNumber + 1,
        }));
        return images[0];
      })
      .catch(error => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      })
      .then(firstLoadedImage => {
        if (scroll) {
          const { id } = firstLoadedImage;

          const y =
            document.getElementById(id).getBoundingClientRect().top +
            window.scrollY -
            80;
          window.scrollTo({
            top: y,
            behavior: 'smooth',
          });
        }
      });
  };

  findPic = () => {
    const largeImg = this.state.images.find(image => {
      return image.id === this.state.largeImageId;
    });
    return largeImg;
  };

  openModal = largeImageURL => {
    this.setState({
      isModalOpen: true,
      largeImage: largeImageURL,
      // largeImageId: Number(e.currentTarget.id),
    });
  };
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isLoading, images, isModalOpen, largeImageId, largeImage } =
      this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSearch} />
        <ImageGallery openModal={this.openModal} images={images} />
        {isLoading && <Loader />}
        {images.length > 0 && (
          <Button fetchImages={this.fetchImagesWithScroll} />
        )}
        {isModalOpen && (
          <Modal largeImageId={largeImageId} onClose={this.closeModal}>
            <img src={largeImage} alt="" />
          </Modal>
        )}
      </div>
    );
  }
}
