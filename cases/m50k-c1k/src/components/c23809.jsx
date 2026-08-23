import React from 'react';
const LABEL_23809 = 'component_23809';
export function Component23809({ value = 23809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23809, 'data-value': derived.doubled }, children);
}
export default Component23809;
