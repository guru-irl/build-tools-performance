import React from 'react';
const LABEL_23037 = 'component_23037';
export function Component23037({ value = 23037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23037, 'data-value': derived.doubled }, children);
}
export default Component23037;
