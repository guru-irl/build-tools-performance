import React from 'react';
const LABEL_13426 = 'component_13426';
export function Component13426({ value = 13426, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13426, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13426, 'data-value': derived.doubled }, children);
}
export default Component13426;
