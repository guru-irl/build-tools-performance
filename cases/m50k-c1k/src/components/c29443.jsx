import React from 'react';
const LABEL_29443 = 'component_29443';
export function Component29443({ value = 29443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29443, 'data-value': derived.doubled }, children);
}
export default Component29443;
