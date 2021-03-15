import { Component } from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import axios from 'axios';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import s from './App.module.css';
import Modal from './components/Modal/Modal';

class App extends Component {
  state = {
    pictures: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: '',
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      pictures: [],
      error: null,
      imageModal: '',
    });
  };

  fetchPictures = () => {
    const { currentPage, searchQuery } = this.state;
    this.setState({ isLoading: true });
    axios
      .get(
        `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=19789336-cedf960e9ca7c5db403100932&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(({ data }) => {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...data.hits],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handleImageModal = e => {
    const { tagName, ariaModal } = e.target;

    if (tagName !== 'IMG') {
      return;
    }

    this.setState({ imageModal: ariaModal });
    this.toggleModal();
  };

  render() {
    const { pictures, isLoading, showModal, imageModal } = this.state;
    return (
      <div className={s.App}>
        {showModal && (
          <Modal onClick={this.toggleModal}>
            <img src={imageModal} />
          </Modal>
        )}
        <Searchbar onSubmit={this.onChangeQuery} />
        {isLoading && <h2>Load...</h2>}
        <ImageGallery
          pictures={pictures}
          onClick={e => {
            this.handleImageModal(e);
          }}
        />
        {pictures.length > 0 && !isLoading && (
          <Button fetchPictures={this.fetchPictures} />
        )}
      </div>
    );
  }
}

export default App;
