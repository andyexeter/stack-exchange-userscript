const head = document.querySelector('head');

const viewportTag = document.createElement('meta');
viewportTag.name = 'viewport';
viewportTag.content = 'width=device-width, initial-scale=1.0';

head.appendChild(viewportTag);

const br = document.createElement('br');
document.querySelectorAll('.question .metaInfo').forEach(metaInfo => Array.from(metaInfo.querySelectorAll('.post-tag')).at(-1).after(br));

const styles = `
@media (max-width: 991px) {
    .s-navigation {
        flex-wrap: nowrap;
        overflow: auto;
    }

    .contentWrapper {
        box-sizing: border-box;
        width: 100%;
        padding: 0 15px;
    }

    #mainArea {
        float: none;
        width: 100%;
    }

    .question-container {
        width: 100%;
        display: flex;
        padding: 15px 0;
    }

    .question.question-hot {
        width: 100%;
        float: none;
    }

    .question h2 {
        font-size: 16px;
        margin-bottom: 8px;
    }

    .question-container .post-tag {
        margin-bottom: 8px;
    }
}
`

const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
head.appendChild(styleTag);