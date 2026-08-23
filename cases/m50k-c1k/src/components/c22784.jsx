import React from 'react';
const LABEL_22784 = 'component_22784';
export function Component22784({ value = 22784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22784, 'data-value': derived.doubled }, children);
}
export default Component22784;
