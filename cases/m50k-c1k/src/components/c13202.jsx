import React from 'react';
const LABEL_13202 = 'component_13202';
export function Component13202({ value = 13202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13202, 'data-value': derived.doubled }, children);
}
export default Component13202;
