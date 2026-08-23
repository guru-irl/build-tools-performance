import React from 'react';
const LABEL_22391 = 'component_22391';
export function Component22391({ value = 22391, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22391, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22391, 'data-value': derived.doubled }, children);
}
export default Component22391;
