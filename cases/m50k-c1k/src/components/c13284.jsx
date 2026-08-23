import React from 'react';
const LABEL_13284 = 'component_13284';
export function Component13284({ value = 13284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13284, 'data-value': derived.doubled }, children);
}
export default Component13284;
