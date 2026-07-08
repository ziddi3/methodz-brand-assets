const MANIFEST_URL = 'https://raw.githubusercontent.com/ziddi3/methodz-brand-assets/main/api/v1/manifest.json';
const RAW_BASE_URL = 'https://raw.githubusercontent.com/ziddi3/methodz-brand-assets/main/';

async function getBrandAssetPath(company, assetKey) {
  const response = await fetch(MANIFEST_URL);

  if (!response.ok) {
    throw new Error(`Failed to load brand manifest: ${response.status}`);
  }

  const manifest = await response.json();
  const assetPath = manifest?.[company]?.[assetKey];

  if (!assetPath) {
    throw new Error(`Asset not found: ${company}.${assetKey}`);
  }

  return `${RAW_BASE_URL}${assetPath}`;
}

async function demo() {
  const methodzTrustIcon = await getBrandAssetPath('methodz', 'trust_icon');
  const canadianSoftWaterIcon = await getBrandAssetPath('canadian_soft_water', 'icon');

  console.log('Methodz trust icon:', methodzTrustIcon);
  console.log('Canadian Soft Water icon:', canadianSoftWaterIcon);
}

demo().catch(console.error);
