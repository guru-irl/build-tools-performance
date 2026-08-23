import React from 'react';
const LABEL_2972 = 'component_2972';
export function Component2972({ value = 2972, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2972, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2972, 'data-value': derived.doubled }, children);
}
export default Component2972;
