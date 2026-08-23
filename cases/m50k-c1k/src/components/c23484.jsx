import React from 'react';
const LABEL_23484 = 'component_23484';
export function Component23484({ value = 23484, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23484, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23484, 'data-value': derived.doubled }, children);
}
export default Component23484;
