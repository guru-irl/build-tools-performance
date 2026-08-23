import React from 'react';
const LABEL_42590 = 'component_42590';
export function Component42590({ value = 42590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42590, 'data-value': derived.doubled }, children);
}
export default Component42590;
