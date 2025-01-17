"use client";

import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

const bankOptions = [
    { id: 1, name: 'Access Bank', code: '044', color: '#91A62A' },
    { id: 2, name: 'Citibank', code: '023', color: '#0275D0' },
    { id: 3, name: 'Palmpay', code: '999991', color: '#7F13CB' },
    { id: 4, name: 'Opay', code: '999992', color: '#08A67C' },
    { id: 5, name: 'Ecobank', code: '050', color: '#00537F' },
    { id: 6, name: 'Fidelity Bank', code: '070', color: '#232B69' },
    { id: 7, name: 'First Bank of Nigeria', code: '011', color: '#0C2B5C' },
    { id: 8, name: 'First City Monument Bank', code: '214', color: '#702699' },
    { id: 9, name: 'Guaranty Trust Bank', code: '058', color: '#C3460E' },
    { id: 10, name: 'Heritage Bank', code: '030', color: '#439B2D' },
    { id: 11, name: 'Jaiz Bank', code: '301', color: '#0B411F' },
    { id: 12, name: 'Keystone Bank', code: '082', color: '#014888' },
    { id: 13, name: 'Providus Bank Plc', code: '101', color: '#4C28BC' },
    { id: 14, name: 'Polaris Bank', code: '076', color: '#8834AE' },
    { id: 15, name: 'Stanbic IBTC Bank', code: '221', color: '#04009D' },
    { id: 16, name: 'Standard Chartered Bank', code: '068', color: '#0671A9' },
    { id: 17, name: 'Sterling Bank', code: '232', color: '#DB3539' },
    { id: 18, name: 'Suntrust Bank', code: '100', color: '#4C28BC' },
    { id: 19, name: 'Union Bank', code: '032', color: '#00ADEF' },
    { id: 20, name: 'United Bank for Africa', code: '033', color: '#D42C07' },
    { id: 21, name: 'Unity Bank Plc', code: '215', color: '#88BB52' },
    { id: 22, name: 'Wema Bank', code: '035', color: '#72235A' },
    { id: 23, name: 'Zenith Bank', code: '057', color: '#E6000D' },
    { id: 24, name: 'Kuda Microfinance Bank', code: '50211', color: '#4C28BC' },
    { id: 25, name: 'Moniepoint', code: '50515', color: '#0649C4' },
    { id: 26, name: 'Paga', code: '100002', color: '#4C28BC' },
    { id: 27, name: 'ALAT by Wema', code: '035A', color: '#4C28BC' },
    { id: 28, name: 'Borstal Microfinance Bank', code: '090454', color: '#4C28BC' },
    { id: 29, name: 'Calabar Microfinance Bank', code: '090415', color: '#4C28BC' },
    { id: 30, name: 'Cherish Microfinance Bank', code: '090440', color: '#4C28BC' },
    { id: 31, name: 'Cross River Microfinance Bank', code: '090429', color: '#4C28BC' },
    { id: 32, name: 'Crutech Microfinance Bank', code: '090414', color: '#4C28BC' },
    { id: 33, name: 'Mainstreet MFB', code: '090171', color: '#4C28BC' },
    { id: 34, name: 'Fame Microfinance Bank', code: '090330', color: '#4C28BC' },
    { id: 35, name: 'First Generation Mortgage Bank', code: '070014', color: '#4C28BC' },
    { id: 36, name: 'Fairmoney Microfinance Bank', code: '51318', color: '#4C28BC' },
    { id: 37, name: 'Giwa Microfinance Bank', code: '090441', color: '#4C28BC' },
    { id: 38, name: 'Globus Bank', code: '000027', color: '#4C28BC' },
    { id: 39, name: 'Haggai Mortgage Bank', code: '070017', color: '#4C28BC' },
    { id: 40, name: 'Heritage Bank', code: '000020', color: '#4C28BC' },
    { id: 41, name: 'Ibeto Bank', code: '090439', color: '#4C28BC' },
    { id: 42, name: 'Imperial Homes Mortgage Bank', code: '070002', color: '#4C28BC' },
    { id: 43, name: 'Infiniti Microfinance Bank', code: '090465', color: '#4C28BC' },
    { id: 44, name: 'ITF Microfinance Bank', code: '090431', color: '#4C28BC' },
    { id: 45, name: 'Jigawa Microfinance Bank', code: '090422', color: '#4C28BC' },
    { id: 46, name: 'Karshi Microfinance Bank', code: '090451', color: '#4C28BC' },
    { id: 47, name: 'Lagos Building Investment Company Plc', code: '090030', color: '#4C28BC' },
    { id: 48, name: 'Mcash Microfinance Bank', code: '090418', color: '#4C28BC' },
    { id: 49, name: 'NIRSAL Microfinance Bank', code: '090418', color: '#4C28BC' },
    { id: 50, name: 'Omoluabi Savings and Loans', code: '000023', color: '#4C28BC' },
    { id: 51, name: 'Oyo MFB', code: '090442', color: '#4C28BC' },
    { id: 52, name: 'Page Financials', code: '000019', color: '#4C28BC' },
    { id: 53, name: 'Parkway Microfinance Bank', code: '090449', color: '#4C28BC' },
    { id: 54, name: 'PecanTrust Microfinance Bank', code: '090416', color: '#4C28BC' },
    { id: 55, name: 'Pennywise Microfinance Bank', code: '000010', color: '#4C28BC' },
    { id: 56, name: 'Petra Microfinance Bank', code: '090417', color: '#4C28BC' },
    { id: 57, name: 'Platonic Microfinance Bank', code: '090419', color: '#4C28BC' },
    { id: 58, name: 'Polaris Digitech Bank', code: '000021', color: '#4C28BC' },
    { id: 59, name: 'Seed Capital Microfinance Bank', code: '090438', color: '#4C28BC' },
    { id: 60, name: 'Smile Microfinance Bank', code: '090430', color: '#4C28BC' },
    { id: 61, name: 'Stanford Microfinance Bank', code: '090445', color: '#4C28BC' },
    { id: 62, name: 'Sterling Alternative Finance', code: '000016', color: '#4C28BC' },
    { id: 63, name: 'Taj Bank', code: '090445', color: '#4C28BC' },
    { id: 64, name: 'TCF MFB', code: '090433', color: '#4C28BC' },
    { id: 65, name: 'Trustbond Microfinance Bank', code: '090464', color: '#4C28BC' },
    { id: 66, name: 'VFD MFB', code: '090493', color: '#4C28BC' },
    { id: 67, name: 'Virtue Microfinance Bank', code: '090443', color: '#4C28BC' },
    { id: 68, name: 'Visa Microfinance Bank', code: '000028', color: '#4C28BC' },
    { id: 69, name: 'XSLNCE Microfinance Bank', code: '090463', color: '#4C28BC' },
    { id: 70, name: 'Zankli Microfinance Bank', code: '090469', color: '#4C28BC' },
    { id: 71, name: 'Zenith Mortgage Bank', code: '090440', color: '#4C28BC' },
    { id: 72, name: 'Zenith Trust', code: '090470', color: '#4C28BC' },
  ];
  

interface BankOption {
  id: number;
  name: string;
  code: string;
}

interface BankOptionsProps {
  value: BankOption | null;
  onChange: (value: BankOption | null) => void;
}

const BankOptions: React.FC<BankOptionsProps> = ({ value, onChange }) => {
    return (
      <Autocomplete
        options={bankOptions}
        getOptionLabel={(option) => `${option.name}`} // Changed this line
        renderInput={(params) => <TextField {...params} label="Select Bank" variant="outlined" />}
        value={value}
        className='bg-white'
        onChange={(event, newValue) => {
          onChange(newValue);
        }}
        isOptionEqualToValue={(option, value) => option.id === value.id}
        filterOptions={(options, state) =>
          options.filter(option => 
            option.name.toLowerCase().includes(state.inputValue.toLowerCase())
          )
        }
      />
    );
  };
  

export default BankOptions;
