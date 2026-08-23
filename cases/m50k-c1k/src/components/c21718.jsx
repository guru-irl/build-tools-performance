import React from 'react';
const LABEL_21718 = 'component_21718';
export function Component21718({ value = 21718, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21718, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21718, 'data-value': derived.doubled }, children);
}
export default Component21718;
