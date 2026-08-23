import React from 'react';
const LABEL_26095 = 'component_26095';
export function Component26095({ value = 26095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26095, 'data-value': derived.doubled }, children);
}
export default Component26095;
