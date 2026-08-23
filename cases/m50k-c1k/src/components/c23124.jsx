import React from 'react';
const LABEL_23124 = 'component_23124';
export function Component23124({ value = 23124, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23124, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23124, 'data-value': derived.doubled }, children);
}
export default Component23124;
