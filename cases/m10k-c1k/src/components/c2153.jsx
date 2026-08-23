import React from 'react';
const LABEL_2153 = 'component_2153';
export function Component2153({ value = 2153, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2153, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2153, 'data-value': derived.doubled }, children);
}
export default Component2153;
