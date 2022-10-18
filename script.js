const tokenAddress = '0xa99f1D5987CD63fC96cA9FE36ce5A42D8403268a';
const tokenSymbol = 'NG';
const tokenDecimals = 8;
const tokenImage = 'https://pbs.twimg.com/profile_images/1503203193630601218/t0PdIaes_400x400.jpg';

async function addTokenFunction() {

try {
  
  const wasAdded = await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20', 
      options: {
        address: tokenAddress, 
        symbol: tokenSymbol, 
        decimals: tokenDecimals, 
        image: tokenImage, 
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('Hello NG Token has not been added');
  }
} catch (error) {
  console.log(error);
}
}