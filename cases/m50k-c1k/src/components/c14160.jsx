import React from 'react';
const LABEL_14160 = 'component_14160';
export function Component14160({ value = 14160, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14160, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14160, 'data-value': derived.doubled }, children);
}
export default Component14160;
