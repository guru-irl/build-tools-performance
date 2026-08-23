import React from 'react';
const LABEL_21323 = 'component_21323';
export function Component21323({ value = 21323, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21323, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21323, 'data-value': derived.doubled }, children);
}
export default Component21323;
