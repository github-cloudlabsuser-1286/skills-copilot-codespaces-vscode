import {
     useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
            <textarea
                style={{ width: '100%', height: '200px', marginBottom: '20px' }}
                value={markdown}
                onChange={handleChange}
            />
            <div style={{ width: '100%', border: '1px solid #ccc', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

function reverseSentence(sentence) {
    // Split the sentence into words
    let words = sentence.split(' ');

    // Reverse the array of words
    let reversedWords = words.reverse();

    // Join the reversed array back into a string
    let reversedSentence = reversedWords.join(' ');

    // Capitalize the first letter of the resulting string
    reversedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

    return reversedSentence;
}

// Example usage
let input = "hello world this is a test";
let output = reverseSentence(input);
console.log(output); // Output: "Test a is this world hello"

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
];

function extractNames(data) {
    return data.map(subArray => subArray.map(obj => obj.name)).flat();
}

// Example usage
let names = extractNames(data);
console.log(names); // Output: ["John", "Jane", "Bob"]