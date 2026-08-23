import React from 'react';
const LABEL_5062 = 'component_5062';
export function Component5062({ value = 5062, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5062, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5062, 'data-value': derived.doubled }, children);
}
export default Component5062;
