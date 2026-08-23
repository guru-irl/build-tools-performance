import React from 'react';
const LABEL_21809 = 'component_21809';
export function Component21809({ value = 21809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21809, 'data-value': derived.doubled }, children);
}
export default Component21809;
