import React from 'react';
const LABEL_26604 = 'component_26604';
export function Component26604({ value = 26604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26604, 'data-value': derived.doubled }, children);
}
export default Component26604;
