import React from 'react';
const LABEL_33438 = 'component_33438';
export function Component33438({ value = 33438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33438, 'data-value': derived.doubled }, children);
}
export default Component33438;
