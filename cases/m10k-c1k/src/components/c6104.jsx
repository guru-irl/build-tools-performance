import React from 'react';
const LABEL_6104 = 'component_6104';
export function Component6104({ value = 6104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6104, 'data-value': derived.doubled }, children);
}
export default Component6104;
