import React from 'react';
const LABEL_21438 = 'component_21438';
export function Component21438({ value = 21438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21438, 'data-value': derived.doubled }, children);
}
export default Component21438;
