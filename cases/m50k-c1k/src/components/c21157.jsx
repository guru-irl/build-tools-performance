import React from 'react';
const LABEL_21157 = 'component_21157';
export function Component21157({ value = 21157, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21157, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21157, 'data-value': derived.doubled }, children);
}
export default Component21157;
