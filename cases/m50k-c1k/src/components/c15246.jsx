import React from 'react';
const LABEL_15246 = 'component_15246';
export function Component15246({ value = 15246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15246, 'data-value': derived.doubled }, children);
}
export default Component15246;
