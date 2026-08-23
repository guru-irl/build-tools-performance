import React from 'react';
const LABEL_17630 = 'component_17630';
export function Component17630({ value = 17630, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17630, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17630, 'data-value': derived.doubled }, children);
}
export default Component17630;
