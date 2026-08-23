import React from 'react';
const LABEL_22147 = 'component_22147';
export function Component22147({ value = 22147, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22147, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22147, 'data-value': derived.doubled }, children);
}
export default Component22147;
