/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { GoogleGenAI } from '@google/genai';
import { useEffect, useState } from 'react';

interface AboutMeProps {
    onBack: () => void;
}

export function AboutMe({ onBack }: AboutMeProps) {
    const [aboutText, setAboutText] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAboutText = async () => {
            setIsLoading(true);
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: "Write an engaging 'About Me' section for a senior frontend engineer's portfolio. Mention expertise in React, UI/UX design, and working with modern APIs like Gemini. Keep it professional but approachable. Structure the output into 2-3 paragraphs. Do not use markdown."
                }); 
                setAboutText(response.text || '');
            } catch (error) {
                console.error("Failed to generate about me text:", error);
                setAboutText("A passionate senior frontend engineer with a knack for creating beautiful, functional, and user-centric web applications. With deep expertise in React and a strong eye for UI/UX design, I enjoy turning complex problems into elegant solutions. I'm always excited to work with modern technologies and APIs, including the Gemini API, to build next-generation digital experiences.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchAboutText();
    }, []);

    return (
        <div className="about-me-page" aria-live="polite">
            <div className="about-me-card">
                <div className="about-me-header">
                    <img src="https://storage.googleapis.com/maker-suite-images/profile_placeholder.png" alt="Profile" className="about-me-image" />
                    <div className="about-me-title">
                        <h2>About Me</h2>
                        <p>Senior Frontend Engineer</p>
                    </div>
                </div>
                <div className="about-me-content">
                    {isLoading ? (
                        <p>Generating bio...</p>
                    ) : (
                        aboutText.split('\n\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))
                    )}
                </div>
            </div>
            <button onClick={onBack} className="back-btn" aria-label="Go back to portfolio">&larr; Back to Projects</button>
        </div>
    );
}
