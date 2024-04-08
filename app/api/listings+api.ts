import { ExpoRequest, ExpoResponse } from "expo-router/server";

const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: ExpoRequest) {
  // return ExpoResponse.json({ message: "Hello from the API" });
  const limit = request.expoUrl.searchParams.get("limit") || 10;

  const response = await fetch(
    `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=${limit}&convert=USD`,
    {
      headers: {
        "X-CMC_PRO_API_KEY": API_KEY!,
      },
    }
  );

  const res = await response.json();
  return ExpoResponse.json(res.data);
  // return ExpoResponse.json(data);
}

// const data = [
//     {
//       "id": 1,
//       "name": "Bitcoin",
//       "symbol": "BTC",
//       "slug": "bitcoin",
//       "num_market_pairs": 10963,
//       "date_added": "2010-07-13T00:00:00.000Z",
//       "tags": [
//           "mineable",
//           "pow",
//           "sha-256",
//           "store-of-value",
//           "state-channel",
//           "coinbase-ventures-portfolio",
//           "three-arrows-capital-portfolio",
//           "polychain-capital-portfolio",
//           "binance-labs-portfolio",
//           "blockchain-capital-portfolio",
//           "boostvc-portfolio",
//           "cms-holdings-portfolio",
//           "dcg-portfolio",
//           "dragonfly-capital-portfolio",
//           "electric-capital-portfolio",
//           "fabric-ventures-portfolio",
//           "framework-ventures-portfolio",
//           "galaxy-digital-portfolio",
//           "huobi-capital-portfolio",
//           "alameda-research-portfolio",
//           "a16z-portfolio",
//           "1confirmation-portfolio",
//           "winklevoss-capital-portfolio",
//           "usv-portfolio",
//           "placeholder-ventures-portfolio",
//           "pantera-capital-portfolio",
//           "multicoin-capital-portfolio",
//           "paradigm-portfolio",
//           "bitcoin-ecosystem",
//           "ftx-bankruptcy-estate"
//       ],
//       "max_supply": 21000000,
//       "circulating_supply": 19677143,
//       "total_supply": 19677143,
//       "infinite_supply": false,
//       "platform": null,
//       "cmc_rank": 1,
//       "self_reported_circulating_supply": null,
//       "self_reported_market_cap": null,
//       "tvl_ratio": null,
//       "last_updated": "2024-04-08T21:12:00.000Z",
//       "quote": {
//           "USD": {
//               "price": 71829.49312884577,
//               "volume_24h": 37183796487.63314,
//               "volume_change_24h": 66.4244,
//               "percent_change_1h": 0.17606369,
//               "percent_change_24h": 3.54853307,
//               "percent_change_7d": 2.9765067,
//               "percent_change_30d": 4.85172363,
//               "percent_change_60d": 58.30081093,
//               "percent_change_90d": 52.24993696,
//               "market_cap": 1413399207913.8157,
//               "market_cap_dominance": 52.4898,
//               "fully_diluted_market_cap": 1508419355705.76,
//               "tvl": null,
//               "last_updated": "2024-04-08T21:12:00.000Z"
//           }
//       }
//   },
//   {
//       "id": 1027,
//       "name": "Ethereum",
//       "symbol": "ETH",
//       "slug": "ethereum",
//       "num_market_pairs": 8748,
//       "date_added": "2015-08-07T00:00:00.000Z",
//       "tags": [
//           "pos",
//           "smart-contracts",
//           "ethereum-ecosystem",
//           "coinbase-ventures-portfolio",
//           "three-arrows-capital-portfolio",
//           "polychain-capital-portfolio",
//           "binance-labs-portfolio",
//           "blockchain-capital-portfolio",
//           "boostvc-portfolio",
//           "cms-holdings-portfolio",
//           "dcg-portfolio",
//           "dragonfly-capital-portfolio",
//           "electric-capital-portfolio",
//           "fabric-ventures-portfolio",
//           "framework-ventures-portfolio",
//           "hashkey-capital-portfolio",
//           "kenetic-capital-portfolio",
//           "huobi-capital-portfolio",
//           "alameda-research-portfolio",
//           "a16z-portfolio",
//           "1confirmation-portfolio",
//           "winklevoss-capital-portfolio",
//           "usv-portfolio",
//           "placeholder-ventures-portfolio",
//           "pantera-capital-portfolio",
//           "multicoin-capital-portfolio",
//           "paradigm-portfolio",
//           "injective-ecosystem",
//           "layer-1",
//           "ftx-bankruptcy-estate"
//       ],
//       "max_supply": null,
//       "circulating_supply": 120070542.58459328,
//       "total_supply": 120070542.58459328,
//       "infinite_supply": true,
//       "platform": null,
//       "cmc_rank": 2,
//       "self_reported_circulating_supply": null,
//       "self_reported_market_cap": null,
//       "tvl_ratio": null,
//       "last_updated": "2024-04-08T21:11:00.000Z",
//       "quote": {
//           "USD": {
//               "price": 3693.5861223777724,
//               "volume_24h": 18932051198.922318,
//               "volume_change_24h": 98.4893,
//               "percent_change_1h": 0.05142093,
//               "percent_change_24h": 8.4833588,
//               "percent_change_7d": 5.76126852,
//               "percent_change_30d": -5.51016596,
//               "percent_change_60d": 52.34835806,
//               "percent_change_90d": 63.44457351,
//               "market_cap": 443490889796.8231,
//               "market_cap_dominance": 16.4787,
//               "fully_diluted_market_cap": 443490889796.82,
//               "tvl": null,
//               "last_updated": "2024-04-08T21:11:00.000Z"
//           }
//       }
//   },
//   {
//       "id": 825,
//       "name": "Tether USDt",
//       "symbol": "USDT",
//       "slug": "tether",
//       "num_market_pairs": 81783,
//       "date_added": "2015-02-25T00:00:00.000Z",
//       "tags": [
//           "payments",
//           "stablecoin",
//           "asset-backed-stablecoin",
//           "avalanche-ecosystem",
//           "solana-ecosystem",
//           "arbitrum-ecosytem",
//           "moonriver-ecosystem",
//           "injective-ecosystem",
//           "bnb-chain",
//           "usd-stablecoin",
//           "optimism-ecosystem"
//       ],
//       "max_supply": null,
//       "circulating_supply": 107024366082.89914,
//       "total_supply": 110942615136.6704,
//       "platform": {
//           "id": 1027,
//           "name": "Ethereum",
//           "symbol": "ETH",
//           "slug": "ethereum",
//           "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
//       },
//       "infinite_supply": true,
//       "cmc_rank": 3,
//       "self_reported_circulating_supply": null,
//       "self_reported_market_cap": null,
//       "tvl_ratio": null,
//       "last_updated": "2024-04-08T21:11:00.000Z",
//       "quote": {
//           "USD": {
//               "price": 0.9998812777041688,
//               "volume_24h": 69543191021.12996,
//               "volume_change_24h": 52.339,
//               "percent_change_1h": -0.01500321,
//               "percent_change_24h": 0.02974101,
//               "percent_change_7d": -0.05742141,
//               "percent_change_30d": -0.23953409,
//               "percent_change_60d": -0.01428172,
//               "percent_change_90d": -0.04871215,
//               "market_cap": 107011659904.44789,
//               "market_cap_dominance": 3.9762,
//               "fully_diluted_market_cap": 110929443774.7,
//               "tvl": null,
//               "last_updated": "2024-04-08T21:11:00.000Z"
//           }
//       }
//   },
//   {
//       "id": 1839,
//       "name": "BNB",
//       "symbol": "BNB",
//       "slug": "bnb",
//       "num_market_pairs": 2133,
//       "date_added": "2017-07-25T00:00:00.000Z",
//       "tags": [
//           "marketplace",
//           "centralized-exchange",
//           "payments",
//           "smart-contracts",
//           "alameda-research-portfolio",
//           "multicoin-capital-portfolio",
//           "bnb-chain",
//           "layer-1",
//           "sec-security-token",
//           "alleged-sec-securities",
//           "celsius-bankruptcy-estate"
//       ],
//       "max_supply": null,
//       "circulating_supply": 149534889.31529194,
//       "total_supply": 149534889.31529194,
//       "infinite_supply": false,
//       "platform": null,
//       "cmc_rank": 4,
//       "self_reported_circulating_supply": null,
//       "self_reported_market_cap": null,
//       "tvl_ratio": null,
//       "last_updated": "2024-04-08T21:11:00.000Z",
//       "quote": {
//           "USD": {
//               "price": 589.7497745895756,
//               "volume_24h": 1717383677.0597863,
//               "volume_change_24h": 24.0101,
//               "percent_change_1h": 0.15837432,
//               "percent_change_24h": 1.41735712,
//               "percent_change_7d": 1.67802157,
//               "percent_change_30d": 20.81121706,
//               "percent_change_60d": 85.20169247,
//               "percent_change_90d": 97.97578931,
//               "market_cap": 88188167266.97057,
//               "market_cap_dominance": 3.2768,
//               "fully_diluted_market_cap": 88188167266.97,
//               "tvl": null,
//               "last_updated": "2024-04-08T21:11:00.000Z"
//           }
//       }
//   },
//   {
//       "id": 5426,
//       "name": "Solana",
//       "symbol": "SOL",
//       "slug": "solana",
//       "num_market_pairs": 649,
//       "date_added": "2020-04-10T00:00:00.000Z",
//       "tags": [
//           "pos",
//           "platform",
//           "solana-ecosystem",
//           "cms-holdings-portfolio",
//           "kenetic-capital-portfolio",
//           "alameda-research-portfolio",
//           "multicoin-capital-portfolio",
//           "okx-ventures-portfolio",
//           "layer-1",
//           "ftx-bankruptcy-estate",
//           "sec-security-token",
//           "alleged-sec-securities",
//           "cmc-crypto-awards-2024"
//       ],
//       "max_supply": null,
//       "circulating_supply": 445571052.5849868,
//       "total_supply": 573500670.9041419,
//       "infinite_supply": true,
//       "platform": null,
//       "cmc_rank": 5,
//       "self_reported_circulating_supply": null,
//       "self_reported_market_cap": null,
//       "tvl_ratio": null,
//       "last_updated": "2024-04-08T21:11:00.000Z",
//       "quote": {
//           "USD": {
//               "price": 180.1379299745439,
//               "volume_24h": 2747134743.1283665,
//               "volume_change_24h": 34.1029,
//               "percent_change_1h": 0.37319868,
//               "percent_change_24h": 0.51890804,
//               "percent_change_7d": -6.76250226,
//               "percent_change_30d": 23.18969158,
//               "percent_change_60d": 74.55415871,
//               "percent_change_90d": 83.02737697,
//               "market_cap": 80264247069.23817,
//               "market_cap_dominance": 2.9824,
//               "fully_diluted_market_cap": 103309223695.68,
//               "tvl": null,
//               "last_updated": "2024-04-08T21:11:00.000Z"
//           }
//       }
//   }
// ]
