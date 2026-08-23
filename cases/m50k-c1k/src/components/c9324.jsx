import React from 'react';
const LABEL_9324 = 'component_9324';
export function Component9324({ value = 9324, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9324, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9324, 'data-value': derived.doubled }, children);
}
export default Component9324;
