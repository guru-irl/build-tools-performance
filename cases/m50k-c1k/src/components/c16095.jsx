import React from 'react';
const LABEL_16095 = 'component_16095';
export function Component16095({ value = 16095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16095, 'data-value': derived.doubled }, children);
}
export default Component16095;
