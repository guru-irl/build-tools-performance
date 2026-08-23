import React from 'react';
const LABEL_42539 = 'component_42539';
export function Component42539({ value = 42539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42539, 'data-value': derived.doubled }, children);
}
export default Component42539;
