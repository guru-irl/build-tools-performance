import React from 'react';
const LABEL_21997 = 'component_21997';
export function Component21997({ value = 21997, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21997, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21997, 'data-value': derived.doubled }, children);
}
export default Component21997;
