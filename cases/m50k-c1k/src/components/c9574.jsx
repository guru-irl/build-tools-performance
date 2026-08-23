import React from 'react';
const LABEL_9574 = 'component_9574';
export function Component9574({ value = 9574, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9574, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9574, 'data-value': derived.doubled }, children);
}
export default Component9574;
