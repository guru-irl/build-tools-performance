import React from 'react';
const LABEL_23705 = 'component_23705';
export function Component23705({ value = 23705, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23705, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23705, 'data-value': derived.doubled }, children);
}
export default Component23705;
