import React from 'react';
const LABEL_20032 = 'component_20032';
export function Component20032({ value = 20032, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20032, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20032, 'data-value': derived.doubled }, children);
}
export default Component20032;
