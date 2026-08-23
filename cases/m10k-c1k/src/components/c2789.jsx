import React from 'react';
const LABEL_2789 = 'component_2789';
export function Component2789({ value = 2789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2789, 'data-value': derived.doubled }, children);
}
export default Component2789;
