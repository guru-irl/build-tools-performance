import React from 'react';
const LABEL_21488 = 'component_21488';
export function Component21488({ value = 21488, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21488, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21488, 'data-value': derived.doubled }, children);
}
export default Component21488;
