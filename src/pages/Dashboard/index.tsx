import React, { useMemo, useState } from 'react';

import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import WalletBox from '../../components/WalletBox';
import MessageBox from '../../components/MessageBox';

import happyImg from '../../assets/happy.svg';
import sadImg from '../../assets/sad.svg';

import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';

import listOfMonths from '../../utils/months';

import { Container, Content } from './styles'

const Dashboard: React.FC = () => {
    const [monthSelected, setMonthSelected] = useState<number>(new Date().getMonth() + 1);
    const [yearSelected, setYearSelected] = useState<number>(new Date().getFullYear());

    const options = [
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Rodrigo', label: 'Rodrigo'},
        {value: 'Rodrigo', label: 'Rodrigo'},
    ]

    const years = useMemo(() => {
        let uniqueYears: number[] = [];


        [...expenses, ...gains].forEach(item => {
            const date = new Date(item.date);
            const year = date.getFullYear();

            if(!uniqueYears.includes(year)){
                uniqueYears.push(year)
           }
        });

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year,
            }
        });
    },[]);


    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month,
            }
        });
    },[]);

    const handleMonthSelected = (month: string) => {
        try {
            const parseMonth = Number(month);
            setMonthSelected(parseMonth);
        }
        catch{
            throw new Error('invalid month value. Is accept 0 - 24.')
        }
    }

    const handleYearSelected = (year: string) => {
        try {
            const parseYear = Number(year);
            setYearSelected(parseYear);
        }
        catch{
            throw new Error('invalid year value. Is accept integer numbers.')
        }
    }

    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor="#F7931B ">
            <SelectInput 
                    options={months}
                    onChange={(e) => handleMonthSelected(e.target.value)} 
                    defaultValue={monthSelected}
                />
                <SelectInput 
                    options={years} 
                    onChange={(e) => handleYearSelected(e.target.value)} 
                    defaultValue={yearSelected}
                />
            </ContentHeader>

            <Content>
                <WalletBox
                    title="Saldo"
                    amount={150.00}
                    footerLabel="Atualizado com base nas Entradas e Saídas"
                    icon="dolar"
                    color="#4E41F0"
                />
                <WalletBox
                    title="Entradas"
                    amount={5000.00}
                    footerLabel="Última atualização em xx/xx/xxxx"
                    icon="arrowUp"
                    color="#F7931B"
                />
                <WalletBox
                    title="Saídas"
                    amount={4850.00}
                    footerLabel="Última atualização em xx/xx/xxxx"
                    icon="arrowDown"
                    color="#E44C4E"
                />

                <MessageBox
                    title="Muito Bem!"
                    description="Sua carteira está positiva!"
                    footerText="Continue assim. Considere investir o seu saldo."
                    icon={happyImg}
                    />
            </Content>
        </Container>
    );
}

export default Dashboard;