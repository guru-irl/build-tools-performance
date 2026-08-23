import React from 'react';
const LABEL_21806 = 'component_21806';
export function Component21806({ value = 21806, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21806, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21806, 'data-value': derived.doubled }, children);
}
export default Component21806;
