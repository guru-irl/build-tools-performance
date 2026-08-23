import React from 'react';
const LABEL_9280 = 'component_9280';
export function Component9280({ value = 9280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9280, 'data-value': derived.doubled }, children);
}
export default Component9280;
