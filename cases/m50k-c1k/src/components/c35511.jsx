import React from 'react';
const LABEL_35511 = 'component_35511';
export function Component35511({ value = 35511, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35511, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35511, 'data-value': derived.doubled }, children);
}
export default Component35511;
