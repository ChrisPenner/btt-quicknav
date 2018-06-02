import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const Finder = ({
    options,
    onSelect,
}) => (
        <Select
            ref={r => window.select = r}
            onBlurResetsInput={true}
            onSelectResetsInput={true}
            autoFocus={true}
            options={options}
            onChange={onSelect}
            searchable={true}
            openOnFocus={true}
        />
    );


export default Finder;
