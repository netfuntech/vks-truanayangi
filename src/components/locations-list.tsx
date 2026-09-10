import {MapPin,Phone,ArrowUpRight} from 'lucide-react';
import {copy,type Language} from '@/lib/i18n';
import {vikingsBrand,vikingsCities,vikingsLocations,mapsUrl} from '@/lib/vikings-locations';

export function LocationsList({language}:{language:Language}){
 const t=copy[language];
 return <section className="locations-panel" aria-label={vikingsBrand}>
  <div className="locations-heading"><strong className="locations-title"><a href="https://vikings.vn" target="_blank" rel="noreferrer" aria-label={`${vikingsBrand} · vikings.vn`}><img src="/logo.svg" width={28} height={28} alt="" aria-hidden="true"/></a>{vikingsBrand}</strong><span className="locations-description">{t.locationsDescription.replace('{count}',String(vikingsLocations.length))}</span></div>
  <div className="locations-body">
   {vikingsCities.map(city=><div key={city} className="locations-city"><h3>{city}</h3><ul>
    {vikingsLocations.filter(location=>location.city===city).map(location=><li key={location.id} className="location-row">
     <div className="location-info"><strong>{location.name}{location.isNew&&<em className="location-badge">{t.newBranch}</em>}{location.comingSoon&&<em className="location-badge soon">{t.comingSoon}</em>}</strong><span><MapPin size={14} aria-hidden="true"/>{location.address}</span><span><Phone size={14} aria-hidden="true"/><a href={`tel:${location.phone.replace(/\D/g,'')}`}>{location.phone}</a></span></div>
     <div className="location-actions"><a className="location-page" href={location.url} target="_blank" rel="noreferrer" aria-label={`${t.branchPage}: ${location.name}`}>{t.branchPage}</a><a className="location-map" href={mapsUrl(location)} target="_blank" rel="noreferrer" aria-label={`${t.openMap}: ${location.name}`}>{t.openMap} <ArrowUpRight size={14} aria-hidden="true"/></a></div>
    </li>)}
   </ul></div>)}
  </div>
  <small className="locations-note">{t.locationsNote}</small>
 </section>;
}
