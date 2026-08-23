import React from 'react';
const LABEL_14443 = 'component_14443';
export function Component14443({ value = 14443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14443, 'data-value': derived.doubled }, children);
}
export default Component14443;
