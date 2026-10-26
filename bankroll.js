export const startingBankroll=1000;
export function validBet(bet,balance){return Number.isSafeInteger(bet)&&bet>=1&&bet<=balance;}
export function reserve(balance,bet){if(!Number.isFinite(bet)||bet<=0||bet>balance)throw new Error('Insufficient bankroll');return balance-bet;}
export function payout(balance,hands,results){return balance+hands.reduce((s,h,i)=>s+h.bet+results[i].units,0);}
