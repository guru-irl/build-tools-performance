import React from 'react';
const LABEL_11202 = 'component_11202';
export function Component11202({ value = 11202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11202, 'data-value': derived.doubled }, children);
}
export default Component11202;
