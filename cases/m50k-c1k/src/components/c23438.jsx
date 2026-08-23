import React from 'react';
const LABEL_23438 = 'component_23438';
export function Component23438({ value = 23438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23438, 'data-value': derived.doubled }, children);
}
export default Component23438;
