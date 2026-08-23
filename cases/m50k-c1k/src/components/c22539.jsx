import React from 'react';
const LABEL_22539 = 'component_22539';
export function Component22539({ value = 22539, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22539, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22539, 'data-value': derived.doubled }, children);
}
export default Component22539;
