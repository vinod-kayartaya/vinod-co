function addCopyButton(codeBlock) {
    // Create the copy button
    var button = document.createElement('button');
    button.classList.add('copy-button');
    button.textContent = 'Copy';

    // Add the button to the code block element
    codeBlock.parentNode.insertBefore(button, codeBlock);

    // Add click event listener to the button
    button.addEventListener('click', function (event) {
        // Select the text in the code block
        var range = document.createRange();
        range.selectNode(codeBlock);
        window.getSelection().addRange(range);

        // Copy the text to the clipboard
        document.execCommand('copy');

        // Remove the selection
        window.getSelection().removeAllRanges();
    });
}
export const addCopyButtons = () => {
    // Select all code block elements on the page
    var codeBlocks = document.querySelectorAll('pre code');
    console.log('found', codeBlocks.length, 'code blocks');
    // Add a copy button to each code block
    codeBlocks.forEach(function (codeBlock) {
        addCopyButton(codeBlock);
    });
};
