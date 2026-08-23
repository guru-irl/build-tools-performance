import React from 'react';
const LABEL_2264 = 'component_2264';
export function Component2264({ value = 2264, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2264, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2264, 'data-value': derived.doubled }, children);
}
export default Component2264;
