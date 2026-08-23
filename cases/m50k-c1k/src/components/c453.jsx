import React from 'react';
const LABEL_453 = 'component_453';
export function Component453({ value = 453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_453, 'data-value': derived.doubled }, children);
}
export default Component453;
