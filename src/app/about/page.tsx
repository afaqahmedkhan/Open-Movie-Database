import React from 'react';

export default function About() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">About</h1>
            <p className="text-lg">
                Consumes a public Movies API and shows the results grouped by year in a user-friendly UI.
            </p>
            <p className="text-lg mt-4">
                Implemented by following the important aspects of a production-ready application:
            </p>
            <ul className="list-disc pl-8 mt-2">
                <li className="text-lg">Code quality and maintainability</li>
                <li className="text-lg">Project and component structure</li>
                <li className="text-lg">Good practices</li>
                <li className="text-lg">Proper usage of the JS framework and language</li>
            </ul>
        </div>
    );
}
