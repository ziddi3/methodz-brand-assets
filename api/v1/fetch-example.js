const MANIFEST_URL = 'https://raw.githubusercontent.com/ziddi3/methodz-brand-assets/main/api/v1/manifest.json';
const RAW_BASE_URL = 'https://raw.githubusercontent.com/ziddi3/methodz-brand-assets/main/';

async function getBrandAsset(company, assetKey) {
  const response = await fetch(MANIFEST_URL);
  if (!response.ok) throw new Error(`Failed to load brand manifest: ${response.status}`);

  const manifest = await response.json();
  const asset = manifest.assets?.[company]?.[assetKey];
  if (!asset) throw new Error(`Asset not found: ${company}.${assetKey}`);

  return {
    ...asset,
    raw_url: `${RAW_BASE_URL}${asset.path}`,
    endpoint_url: `${RAW_BASE_URL}${asset.endpoint}`
  };
}

async function demo() {
  const methodzTrustIcon = await getBrandAsset('methodz', 'trust_icon');
  const canadianSoftWaterIcon = await getBrandAsset('canadian_soft_water', 'icon');

  console.log('Methodz trust icon:', methodzTrustIcon.raw_url);
  console.log('Canadian Soft Water icon:', canadianSoftWaterIcon.raw_url);
  console.log('Endpoint example:', methodzTrustIcon.endpoint_url);
}

demo().catch(console.error);
