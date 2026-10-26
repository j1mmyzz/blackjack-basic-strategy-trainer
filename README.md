# Felt — Blackjack Strategy Club

A responsive, dependency-free blackjack practice app based on the image embedded in the supplied BJA_Basic_Strategy.pdf. The original chart is included as reference.png.

## Run locally

Install Node.js, then run `npm start` in this folder. Open http://127.0.0.1:5173. Run `npm test` to check the strategy engine.

## Deploy to Vercel

Import this folder as a Git repository in Vercel. Select framework **Other**, leave Build Command empty, and set Output Directory to `.`. Alternatively, from this folder run `npx vercel --prod` and sign in. No environment variables, database, or build dependencies are needed.

## Practice

The desktop layout is half chart, half table; mobile stacks the table above the chart. H/S/D/P/R select an action; Enter continues after feedback. Incorrect choices pause and explain the chart, then Continue applies the correct action. Memory mode hides the chart until answering. Focus modes include hard totals, soft totals, pairs, surrender spots, and previously missed initial hands. Accuracy, streak and missed initial hands persist in this browser. Reset stats clears them after confirmation.

## Rules and scope

Strategy recommendations follow the provided BJA chart exactly, including conditional DAS splits, D/Ds fallback, and late surrender. Pair splitting is checked first (8,8 splits rather than surrendering). Simulator uses six decks, H17, doubling on any initial two cards, configurable DAS and late surrender, up to four split hands, and one card on split aces. No resplitting aces. At the split limit, the trainer falls back to totals. No surrender after a split or hit. Insurance is never offered; the chart says to decline it.

Hands are training scenarios, not a casino probability simulator: the shoe resets per round, initial player/dealer blackjacks are excluded, and focus modes deliberately select situations. Dealer blackjack is checked before decisions. Results use practice units; no money or betting account exists. The chart is a memorization guide, not a universal strategy for every casino rule set. Focused practice gives equal opportunity to rare chart situations. Missed replay stores initial unsplit two-card situations; mistakes later in a hand still affect accuracy.

Google Fonts is optional; system font fallbacks work offline. All gameplay and saved progress stay in the browser.

## Updated modes

The simpler interface has two modes. Practice strategy retains the BJA chart and grading. Play blackjack applies your chosen action immediately without grading; the chart is optional. Regular play uses a six-deck shoe reshuffled below 80 cards, includes player/dealer naturals and 3:2 blackjack payouts, and tracks net session units in memory. Each hand starts at one unit; doubles and splits increase exposure. Rules are locked during an active regular hand. Switching modes abandons the current hand. No insurance is offered. This regular mode supersedes the training-scenario exclusions described above. Practice statistics remain separate and saved locally.

## Bankroll and betting

Regular blackjack now starts with $1,000 in play money. Choose a whole-dollar bet before each deal; half, double, and maximum shortcuts are available. Stakes leave the available bankroll when committed. Splits and doubles reserve an additional matching stake and are disabled if you cannot afford them. Settlement returns stakes plus profit (3:2 for a natural, even money for ordinary wins, half back for surrender, full stake back on pushes). Split hands settle individually, and the banner displays the round's net result. The bankroll persists locally; refreshing during a hand forfeits its committed stakes. Switching modes and resetting the bankroll are disabled during active play. Reset bankroll restores $1,000 and clears session results. Betting does not affect strategy practice statistics.
