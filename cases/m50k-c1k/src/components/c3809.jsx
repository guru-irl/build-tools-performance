import React from 'react';
const LABEL_3809 = 'component_3809';
export function Component3809({ value = 3809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3809, 'data-value': derived.doubled }, children);
}
export default Component3809;
