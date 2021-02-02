import React from 'react';

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

import { Container } from './styles'

const List: React.FC = () => {
    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Rodrigo', label: 'Rodrigo'},
    ]
    
    return (
        <ContentHeader title="Saídas" lineColor="#E44C4E ">
            <SelectInput options={options} />
        </ContentHeader>
    );
}

export default List;