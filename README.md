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
