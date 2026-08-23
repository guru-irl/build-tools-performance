import React from 'react';
const LABEL_9831 = 'component_9831';
export function Component9831({ value = 9831, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9831, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9831, 'data-value': derived.doubled }, children);
}
export default Component9831;
