import React from 'react';
const LABEL_23421 = 'component_23421';
export function Component23421({ value = 23421, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23421, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23421, 'data-value': derived.doubled }, children);
}
export default Component23421;
