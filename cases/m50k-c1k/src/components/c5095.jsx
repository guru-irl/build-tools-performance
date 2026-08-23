import React from 'react';
const LABEL_5095 = 'component_5095';
export function Component5095({ value = 5095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5095, 'data-value': derived.doubled }, children);
}
export default Component5095;
