import React from 'react';
const LABEL_33478 = 'component_33478';
export function Component33478({ value = 33478, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33478, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33478, 'data-value': derived.doubled }, children);
}
export default Component33478;
