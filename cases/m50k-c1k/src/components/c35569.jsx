import React from 'react';
const LABEL_35569 = 'component_35569';
export function Component35569({ value = 35569, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35569, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35569, 'data-value': derived.doubled }, children);
}
export default Component35569;
