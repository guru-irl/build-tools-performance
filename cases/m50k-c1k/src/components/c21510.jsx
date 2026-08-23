import React from 'react';
const LABEL_21510 = 'component_21510';
export function Component21510({ value = 21510, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21510, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21510, 'data-value': derived.doubled }, children);
}
export default Component21510;
