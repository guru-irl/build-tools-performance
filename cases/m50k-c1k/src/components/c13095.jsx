import React from 'react';
const LABEL_13095 = 'component_13095';
export function Component13095({ value = 13095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13095, 'data-value': derived.doubled }, children);
}
export default Component13095;
