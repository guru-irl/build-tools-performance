import React from 'react';
const LABEL_11095 = 'component_11095';
export function Component11095({ value = 11095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11095, 'data-value': derived.doubled }, children);
}
export default Component11095;
