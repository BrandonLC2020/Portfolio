/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { Box, Chip } from '@mui/material';

interface FilterControlsProps {
    technologies: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

// Renders the filter chips for project technologies.
export function FilterControls({ technologies, activeFilter, onFilterChange }: FilterControlsProps) {
    return (
        <Box
            component="div"
            role="toolbar"
            aria-label="Project filters"
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: 1.5,
                mb: 4,
            }}
        >
            <Chip
                label="All"
                color="primary"
                variant={activeFilter === 'All' ? 'filled' : 'outlined'}
                onClick={() => onFilterChange('All')}
                aria-pressed={activeFilter === 'All'}
            />
            {technologies.map(tech => (
                <Chip
                    key={tech}
                    label={tech}
                    color="primary"
                    variant={activeFilter === tech ? 'filled' : 'outlined'}
                    onClick={() => onFilterChange(tech)}
                    aria-pressed={activeFilter === tech}
                />
            ))}
        </Box>
    );
}