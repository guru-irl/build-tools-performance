import React from 'react';
const LABEL_36007 = 'component_36007';
export function Component36007({ value = 36007, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36007, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36007, 'data-value': derived.doubled }, children);
}
export default Component36007;
