import React from 'react';
const LABEL_10516 = 'component_10516';
export function Component10516({ value = 10516, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10516, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10516, 'data-value': derived.doubled }, children);
}
export default Component10516;
