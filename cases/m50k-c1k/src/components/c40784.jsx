import React from 'react';
const LABEL_40784 = 'component_40784';
export function Component40784({ value = 40784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40784, 'data-value': derived.doubled }, children);
}
export default Component40784;
