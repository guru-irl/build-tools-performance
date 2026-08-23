import React from 'react';
const LABEL_16646 = 'component_16646';
export function Component16646({ value = 16646, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16646, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16646, 'data-value': derived.doubled }, children);
}
export default Component16646;
