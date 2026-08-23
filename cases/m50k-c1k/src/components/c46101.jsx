import React from 'react';
const LABEL_46101 = 'component_46101';
export function Component46101({ value = 46101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46101, 'data-value': derived.doubled }, children);
}
export default Component46101;
