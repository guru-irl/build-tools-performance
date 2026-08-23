import React from 'react';
const LABEL_24095 = 'component_24095';
export function Component24095({ value = 24095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24095, 'data-value': derived.doubled }, children);
}
export default Component24095;
