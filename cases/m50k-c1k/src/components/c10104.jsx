import React from 'react';
const LABEL_10104 = 'component_10104';
export function Component10104({ value = 10104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10104, 'data-value': derived.doubled }, children);
}
export default Component10104;
