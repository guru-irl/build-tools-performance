import React from 'react';
const LABEL_11037 = 'component_11037';
export function Component11037({ value = 11037, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11037, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11037, 'data-value': derived.doubled }, children);
}
export default Component11037;
