import React from 'react';
const LABEL_919 = 'component_919';
export function Component919({ value = 919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_919, 'data-value': derived.doubled }, children);
}
export default Component919;
