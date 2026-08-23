import React from 'react';
const LABEL_23489 = 'component_23489';
export function Component23489({ value = 23489, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23489, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23489, 'data-value': derived.doubled }, children);
}
export default Component23489;
