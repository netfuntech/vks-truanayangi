import data from '@/data/vikings-locations.json';

export type VikingsLocation = {
  id: string;
  cyberNo: string | null;
  name: string;
  address: string;
  city: string;
  phone: string;
  isNew: boolean;
  comingSoon: boolean;
  url: string;
};

export const vikingsBrand: string = data.brand;
export const vikingsSource: string = data.source;
export const vikingsLocations: readonly VikingsLocation[] = data.locations;

export const vikingsCities: readonly string[] = [...new Set(vikingsLocations.map((location) => location.city))];

export function mapsUrl(location: VikingsLocation) {
  const query = `${location.name}, ${location.address}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
