import {total} from './strategy.js';
export function outcome(hand,dealer){
 const p=total(hand.cards).n,d=total(dealer).n;
 const natural=p===21&&hand.cards.length===2&&!hand.split;
 const dealerNatural=d===21&&dealer.length===2;
 if(dealerNatural)return {label:natural?'Push':'Dealer blackjack',units:natural?0:-hand.bet};
 if(natural)return {label:'Blackjack',units:hand.bet*1.5};
 if(hand.surrender)return {label:'Surrender',units:-hand.bet/2};
 if(p>21)return {label:'Bust',units:-hand.bet};
 if(d>21||p>d)return {label:'Win',units:hand.bet};
 if(p===d)return {label:'Push',units:0};
 return {label:'Loss',units:-hand.bet};
}
