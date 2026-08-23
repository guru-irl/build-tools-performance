import React from 'react';
const LABEL_22453 = 'component_22453';
export function Component22453({ value = 22453, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22453, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22453, 'data-value': derived.doubled }, children);
}
export default Component22453;
