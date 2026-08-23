import React from 'react';
const LABEL_22251 = 'component_22251';
export function Component22251({ value = 22251, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22251, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22251, 'data-value': derived.doubled }, children);
}
export default Component22251;
