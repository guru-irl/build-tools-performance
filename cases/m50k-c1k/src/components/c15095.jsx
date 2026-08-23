import React from 'react';
const LABEL_15095 = 'component_15095';
export function Component15095({ value = 15095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15095, 'data-value': derived.doubled }, children);
}
export default Component15095;
