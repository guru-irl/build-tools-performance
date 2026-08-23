import React from 'react';
const LABEL_22496 = 'component_22496';
export function Component22496({ value = 22496, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22496, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22496, 'data-value': derived.doubled }, children);
}
export default Component22496;
