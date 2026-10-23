export const columns=[2,3,4,5,6,7,8,9,10,11];
const row=s=>s.split(' ');
export const charts={
 pairs:{11:row('Y Y Y Y Y Y Y Y Y Y'),10:row('N N N N N N N N N N'),9:row('Y Y Y Y Y N Y Y N N'),8:row('Y Y Y Y Y Y Y Y Y Y'),7:row('Y Y Y Y Y Y N N N N'),6:row('Y/N Y Y Y Y N N N N N'),5:row('N N N N N N N N N N'),4:row('N N N Y/N Y/N N N N N N'),3:row('Y/N Y/N Y Y Y Y N N N N'),2:row('Y/N Y/N Y Y Y Y N N N N')},
 soft:{20:row('S S S S S S S S S S'),19:row('S S S S Ds S S S S S'),18:row('Ds Ds Ds Ds Ds S S H H H'),17:row('H D D D D H H H H H'),16:row('H H D D D H H H H H'),15:row('H H D D D H H H H H'),14:row('H H H D D H H H H H'),13:row('H H H D D H H H H H')},
 hard:{17:row('S S S S S S S S S S'),16:row('S S S S S H H H H H'),15:row('S S S S S H H H H H'),14:row('S S S S S H H H H H'),13:row('S S S S S H H H H H'),12:row('H H S S S H H H H H'),11:row('D D D D D D D D D D'),10:row('D D D D D D D D H H'),9:row('H D D D D H H H H H'),8:row('H H H H H H H H H H')},
 surrender:{16:row('– – – – – – – SUR SUR SUR'),15:row('– – – – – – – – SUR –'),14:row('– – – – – – – – – –')}
};
export function total(cards){let n=cards.reduce((s,c)=>s+c.v,0),a=cards.filter(c=>c.v===11).length;while(n>21&&a){n-=10;a--}return {n,soft:a>0}}
export const names={H:'Hit',S:'Stand',D:'Double',P:'Split',R:'Surrender'};
export function advise(cards,dealer,rules={das:true,surrender:true},split=false,canSplit=true){
 const {n,soft}=total(cards),i=columns.indexOf(dealer),two=cards.length===2,canDouble=two&&(!split||rules.das);let prefix='';
 if(two&&cards[0].v===cards[1].v){let key=cards[0].v,code=charts.pairs[key][i];if(canSplit&&(code==='Y'||code==='Y/N'&&rules.das))return {action:'P',section:'pairs',key,code,why:`Pair ${key===11?'A':key},${key===11?'A':key} against ${dealer===11?'A':dealer}: ${code}. ${code==='Y/N'?'Split because double after split is enabled.':'The pair chart says to split.'}`};prefix=`The pair chart says not to split${!canSplit?' again (four-hand limit)':''}. `}
 if(two&&!split&&rules.surrender&&!soft&&charts.surrender[n]?.[i]==='SUR')return {action:'R',section:'surrender',key:n,code:'SUR',why:`Hard ${n} against ${dealer===11?'A':dealer}: SUR in the late surrender chart. Surrender is available on this initial hand.`};
 const section=soft?'soft':'hard',key=soft?Math.min(20,Math.max(13,n)):Math.min(17,Math.max(8,n)),code=charts[section][key][i];
 const action=code==='D'||code==='Ds'?(canDouble?'D':code==='Ds'?'S':'H'):code;
 return {action,section,key,code,why:prefix+`${soft?'Soft':'Hard'} ${n} against ${dealer===11?'A':dealer}: ${code}. `+({H:'The chart says to hit.',S:'The chart says to stand.',D:canDouble?'Double is available: take exactly one more card.':'Double is unavailable, so hit instead.',Ds:canDouble?'Double is available; otherwise this cell means stand.':'Double is unavailable, so stand instead.'}[code])};
}
