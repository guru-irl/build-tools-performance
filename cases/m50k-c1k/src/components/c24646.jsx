import React from 'react';
const LABEL_24646 = 'component_24646';
export function Component24646({ value = 24646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24646, 'data-value': derived.doubled }, children);
}
export default Component24646;
