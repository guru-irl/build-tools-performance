import React from 'react';
const LABEL_12443 = 'component_12443';
export function Component12443({ value = 12443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12443, 'data-value': derived.doubled }, children);
}
export default Component12443;
