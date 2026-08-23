import React from 'react';
const LABEL_3081 = 'component_3081';
export function Component3081({ value = 3081, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3081, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3081, 'data-value': derived.doubled }, children);
}
export default Component3081;
