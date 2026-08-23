import React from 'react';
const LABEL_11784 = 'component_11784';
export function Component11784({ value = 11784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11784, 'data-value': derived.doubled }, children);
}
export default Component11784;
