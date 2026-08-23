import React from 'react';
const LABEL_44784 = 'component_44784';
export function Component44784({ value = 44784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44784, 'data-value': derived.doubled }, children);
}
export default Component44784;
