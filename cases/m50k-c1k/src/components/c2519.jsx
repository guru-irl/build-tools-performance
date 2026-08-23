import React from 'react';
const LABEL_2519 = 'component_2519';
export function Component2519({ value = 2519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2519, 'data-value': derived.doubled }, children);
}
export default Component2519;
