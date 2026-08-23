import React from 'react';
const LABEL_2957 = 'component_2957';
export function Component2957({ value = 2957, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2957, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2957, 'data-value': derived.doubled }, children);
}
export default Component2957;
