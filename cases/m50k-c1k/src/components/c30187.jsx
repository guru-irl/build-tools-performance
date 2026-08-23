import React from 'react';
const LABEL_30187 = 'component_30187';
export function Component30187({ value = 30187, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30187, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30187, 'data-value': derived.doubled }, children);
}
export default Component30187;
