import React from 'react';
const LABEL_21943 = 'component_21943';
export function Component21943({ value = 21943, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21943, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21943, 'data-value': derived.doubled }, children);
}
export default Component21943;
