import React from 'react';
const LABEL_18443 = 'component_18443';
export function Component18443({ value = 18443, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_18443, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_18443, 'data-value': derived.doubled }, children);
}
export default Component18443;
