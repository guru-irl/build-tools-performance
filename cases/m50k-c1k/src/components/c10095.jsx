import React from 'react';
const LABEL_10095 = 'component_10095';
export function Component10095({ value = 10095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10095, 'data-value': derived.doubled }, children);
}
export default Component10095;
