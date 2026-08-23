import React from 'react';
const LABEL_23759 = 'component_23759';
export function Component23759({ value = 23759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23759, 'data-value': derived.doubled }, children);
}
export default Component23759;
