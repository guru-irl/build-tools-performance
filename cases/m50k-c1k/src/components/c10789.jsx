import React from 'react';
const LABEL_10789 = 'component_10789';
export function Component10789({ value = 10789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10789, 'data-value': derived.doubled }, children);
}
export default Component10789;
