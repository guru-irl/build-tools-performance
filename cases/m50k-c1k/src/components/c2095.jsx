import React from 'react';
const LABEL_2095 = 'component_2095';
export function Component2095({ value = 2095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2095, 'data-value': derived.doubled }, children);
}
export default Component2095;
