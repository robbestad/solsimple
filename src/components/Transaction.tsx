import React from 'react';
import { changeDescriptionFormat } from '../utils/changeDescriptionFormat';

import { getRelativeTime } from '../utils/getRelativeTime';
import { getTransactionIcon } from '../utils/getTransactionIcon';

const Transaction = ({ transaction, address }: any) => {
  // console.log(transaction);
  return (
    <div className="flex justify-between font-bold text-gray-800 py-3 mx-2 lg:mx-0 border-b border-gray-300">
      <div className="flex items-center">
        <div className="mr-3 text-xl text-center">
          {getTransactionIcon(transaction.type)}
        </div>
        <div className="flex flex-col py-2 pr-3">
          <div>{`${changeDescriptionFormat(transaction, address)}`}</div>
          <div className="text-xs font-normal">{`${transaction.type}`}</div>
        </div>
      </div>
      <div className="text-xs tracking-tight text-right ml-4 pt-2 sm:pt-0">{`${getRelativeTime(
        transaction.timestamp
      )}`}</div>
    </div>
  );
};

export default Transaction;
