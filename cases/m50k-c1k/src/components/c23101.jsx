import React from 'react';
const LABEL_23101 = 'component_23101';
export function Component23101({ value = 23101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23101, 'data-value': derived.doubled }, children);
}
export default Component23101;
