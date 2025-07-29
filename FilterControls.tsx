/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

interface FilterControlsProps {
    technologies: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

// Renders the filter buttons for project technologies.
export function FilterControls({ technologies, activeFilter, onFilterChange }: FilterControlsProps) {
    return (
        <div className="filter-controls" role="toolbar" aria-label="Project filters">
            <button
                onClick={() => onFilterChange('All')}
                className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
                aria-pressed={activeFilter === 'All'}
            >
                All
            </button>
            {technologies.map(tech => (
                <button
                    key={tech}
                    onClick={() => onFilterChange(tech)}
                    className={`filter-btn ${activeFilter === tech ? 'active' : ''}`}
                    aria-pressed={activeFilter === tech}
                >
                    {tech}
                </button>
            ))}
        </div>
    );
}