import React from 'react';
const LABEL_22109 = 'component_22109';
export function Component22109({ value = 22109, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22109, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22109, 'data-value': derived.doubled }, children);
}
export default Component22109;
