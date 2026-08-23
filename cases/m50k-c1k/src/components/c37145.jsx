import React from 'react';
const LABEL_37145 = 'component_37145';
export function Component37145({ value = 37145, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_37145, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_37145, 'data-value': derived.doubled }, children);
}
export default Component37145;
