// pages/home.jsx
"use client";

import React, { useState, useEffect } from 'react';
import Title from '@/app/components/title';
import Subtitle from '@/app/components/subtitle';
import Section from '@/app/components/section';
import AccountCard from '@/app/components/accountCard';
import { Divider, Tooltip } from '@mui/material';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import QuickActionsSection from './quickActions'; // Import QuickActionsSection
import RecentTransactionsSection from './recentTransactions'; // Import RecentTransactionsSection
import TopSaversSection from './topSavers'; // Import TopSaversSection
import WealthMapSection from './wealthMap'; // Import WealthMapSection

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [showBalances, setShowBalances] = useState<boolean>(true);
  const [showLeftButton, setShowLeftButton] = useState<boolean>(false);
  const [showRightButton, setShowRightButton] = useState<boolean>(true);

  const handleToggleBalances = () => {
    setShowBalances(!showBalances);
  };

  useEffect(() => {
    const container = document.getElementById('account-cards-container');
    const handleScroll = () => {
      if (container) {
        setScrollPosition(container.scrollLeft);
        setShowLeftButton(container.scrollLeft > 0);
        setShowRightButton(container.scrollLeft < container.scrollWidth - container.clientWidth);
      }
    };

    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);



  const scrollLeft = () => {
    const container = document.getElementById('account-cards-container');
    if (container) {
      container.scrollLeft -= 150;
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('account-cards-container');
    if (container) {
      container.scrollLeft += 150;
    }
  };

  return (
    <div className="px-6 max-w-full">
      <div className="flex items-center mb-4 mt-5 relative">
        <div className="relative">
          <img src="/images/DrTsquare.png" alt="Profile" className="w-24 h-24 rounded-full border-2 border-purple-400" />

          <Tooltip title="My WealthMap" placement="right">
            <div className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center font-proxima text-sm">3</div>
          </Tooltip>
        </div>

        <div className="ml-4">
          <Title><span style={{ color: '#BB9CE8' }}>Hi</span> Tolulope,</Title>
          <Subtitle>Good morning! Welcome to MyFund 👋🏼</Subtitle>
        </div>

        <div className="ml-auto flex items-center">
          {window.innerWidth >= 900 && (
            <span className='mr-2' style={{ letterSpacing: 2, color: 'grey', fontSize: 13 }}>{showBalances ? 'HIDE' : 'SHOW'} BALANCES </span>
          )}
          <span onClick={handleToggleBalances} style={{ cursor: 'pointer', transition: 'color 3s ease', fontSize: 29 }}>
            {showBalances ? <Visibility style={{ color: '#4C28BC', transition: 'color 3s ease', fontSize: 29 }} /> : <VisibilityOff style={{ color: 'grey', transition: 'color 0.3s ease' }} />}
          </span>
        </div>
      </div>

      <div className="rounded-lg p-4 sm:p-6 grid grid-cols-[auto,1fr] items-start" style={{ backgroundColor: '#DCD1FF', color: 'black', fontFamily: 'karla', fontSize: 14 }}>
        <img src="/images/logo..png" alt="MyFund Logo" className="w-12 h-12 mr-4 self-center" />
        <p className="overflow-auto" style={{ wordWrap: 'break-word' }}>
          <span className="font-proxima font-bold text-purple1">Every January and July</span>, you will earn
          <span className="font-proxima font-bold"> 13% p.a.</span> on your SAVINGS and
          <span className="font-proxima font-bold"> 20% p.a.</span> on your INVESTMENTS
          (credited to your wallet) until you have saved enough to buy properties and earn lifetime rent.
          So, keep growing your funds.
        </p>
      </div>

      <Section>MY ACCOUNTS</Section>

      <div className="relative">
        <div id="account-cards-container" className="flex gap-4 mt-2 overflow-x-auto w-full">
          <AccountCard
            icon="save-outline"
            label="SAVINGS"
            rate="13% p.a."
            currency="₦"
            amount={showBalances ? "1,234,567.89" : "****"}
            buttonText="QuickSave"
            buttonIcon="save-outline"
            style={{ transition: 'opacity 0.3s ease' }}
          />
          <AccountCard
            icon="trending-up-outline"
            label="INVESTMENTS"
            rate="20% p.a."
            currency="₦"
            amount={showBalances ? "2,345,678.90" : "****"}
            buttonText="QuickInvest"
            buttonIcon="trending-up-outline"
            style={{ transition: 'opacity 5s ease' }}
          />
          <AccountCard
            icon="home-outline"
            label="PROPERTIES"
            rate="yearly rent"
            currency=""
            amount={showBalances ? "02" : "**"}
            buttonText="Buy Properties"
            buttonIcon="home-outline"
            style={{ transition: 'opacity 5s ease' }}
          />
          <AccountCard
            icon="wallet-outline"
            label="WALLET"
            rate="(My Earnings)"
            currency="₦"
            amount={showBalances ? "265,500.50" : "****"}
            buttonText="Withdraw"
            buttonIcon="wallet-outline"
            style={{ transition: 'opacity 5s ease' }}
          />
        </div>

        {showLeftButton && (
          <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg" onClick={scrollLeft} style={{ marginLeft: -25 }}>
            <IoIosArrowBack className="text-gray-600" />
          </button>
        )}
        {showRightButton && (
          <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg" onClick={scrollRight} style={{ marginRight: -25 }}>
            <IoIosArrowForward className="text-gray-600" />
          </button>
        )}
      </div>

      <Divider className="my-4 bg-gray-100" style={{ marginTop: 20, marginBottom: 20 }} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-10">
        <div className="md:col-span-3" style={{ alignSelf: 'flex-start' }}>
          <QuickActionsSection />
          <RecentTransactionsSection />
        </div>

        <div className="md:col-span-3">
          <TopSaversSection />
        </div>

        <div className="md:col-span-6">
          <WealthMapSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
