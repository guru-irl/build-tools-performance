import React from 'react';
const LABEL_21562 = 'component_21562';
export function Component21562({ value = 21562, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21562, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21562, 'data-value': derived.doubled }, children);
}
export default Component21562;
