import React from 'react';
const LABEL_10174 = 'component_10174';
export function Component10174({ value = 10174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10174, 'data-value': derived.doubled }, children);
}
export default Component10174;
