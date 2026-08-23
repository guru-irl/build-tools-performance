import React from 'react';
const LABEL_5187 = 'component_5187';
export function Component5187({ value = 5187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5187, 'data-value': derived.doubled }, children);
}
export default Component5187;
