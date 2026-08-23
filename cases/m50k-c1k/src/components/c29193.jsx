import React from 'react';
const LABEL_29193 = 'component_29193';
export function Component29193({ value = 29193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29193, 'data-value': derived.doubled }, children);
}
export default Component29193;
