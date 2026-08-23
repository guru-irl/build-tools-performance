import React from 'react';
const LABEL_20095 = 'component_20095';
export function Component20095({ value = 20095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20095, 'data-value': derived.doubled }, children);
}
export default Component20095;
