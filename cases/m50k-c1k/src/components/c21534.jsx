import React from 'react';
const LABEL_21534 = 'component_21534';
export function Component21534({ value = 21534, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21534, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21534, 'data-value': derived.doubled }, children);
}
export default Component21534;
