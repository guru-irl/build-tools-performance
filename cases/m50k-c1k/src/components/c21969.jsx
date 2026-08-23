import React from 'react';
const LABEL_21969 = 'component_21969';
export function Component21969({ value = 21969, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21969, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21969, 'data-value': derived.doubled }, children);
}
export default Component21969;
