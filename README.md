# Modal Project

This project demonstrates the implementation of a modal dialog using HTML, CSS, and JavaScript.

## HTML Structure

The HTML structure consists of the following elements:

- `button`: A button with the ID `open` that triggers the opening of the modal.
- `div.modal-container`: A container for the modal dialog.
  - `div.modal`: The modal dialog itself.
    - `div.modal-header`: The header section of the modal.
      - `h2`: The title of the modal.
      - `i.fa.fa-close.close-icon`: The close icon for the modal.
    - `div.modal-content`: The content section of the modal.
      - `img`: An image displaying a profile photo.
      - `p`: Placeholder text.
    - `div.modal-footer`: The footer section of the modal.
      - `button.btn-close`: A button to close the modal.

## CSS Styling

The CSS styles are defined in an external stylesheet (`style.css`) and are responsible for the visual appearance of the modal.

## JavaScript Functionality

The JavaScript code (`modal.js`) adds the necessary functionality to the modal. It performs the following actions:

- Listens for the `DOMContentLoaded` event to ensure the JavaScript code is executed after the HTML has loaded.
- Retrieves the required DOM elements using their IDs.
- Attaches event listeners to the `open`, `close`, and `close-icon` elements.
- When the `open` button is clicked, it adds the class `show-modal` to the `modal-container` element, displaying the modal.
- When the `close` button or the close icon is clicked, it removes the class `show-modal` from the `modal-container` element, hiding the modal.

## External Resources

The project utilizes the following external resources:

- [Font Awesome](https://fontawesome.com/): A popular icon library used for the close icon.
- Custom CSS styles defined in `style.css` for the modal appearance.

## Usage

To use the modal, follow these steps:

1. Click the "Click to Open" button.
2. The modal dialog will appear, displaying the user profile details.
3. To close the modal, click the "Close" button or the close icon.
