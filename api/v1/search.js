const MANIFEST_URL = 'https://raw.githubusercontent.com/ziddi3/methodz-brand-assets/main/api/v1/manifest.json';
const RAW_BASE_URL = 'https://raw.githubusercontent.com/ziddi3/methodz-brand-assets/main/';

export async function loadManifest() {
  const response = await fetch(MANIFEST_URL);
  if (!response.ok) throw new Error(`Failed to load manifest: ${response.status}`);
  return response.json();
}

export async function getAsset(company, key) {
  const manifest = await loadManifest();
  const asset = manifest.assets?.[company]?.[key];
  if (!asset) throw new Error(`Asset not found: ${company}.${key}`);
  return {
    ...asset,
    raw_url: `${RAW_BASE_URL}${asset.path}`,
    endpoint_url: `${RAW_BASE_URL}${asset.endpoint}`
  };
}

export async function searchAssets(query = '') {
  const manifest = await loadManifest();
  const q = query.toLowerCase();
  const results = [];

  for (const [company, group] of Object.entries(manifest.assets || {})) {
    for (const [key, asset] of Object.entries(group || {})) {
      const haystack = [company, key, asset.id, asset.name, asset.category, ...(asset.tags || [])].join(' ').toLowerCase();
      if (!q || haystack.includes(q)) {
        results.push({
          company,
          key,
          ...asset,
          raw_url: `${RAW_BASE_URL}${asset.path}`,
          endpoint_url: `${RAW_BASE_URL}${asset.endpoint}`
        });
      }
    }
  }

  return results;
}
