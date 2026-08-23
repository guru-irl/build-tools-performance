import React from 'react';
const LABEL_22715 = 'component_22715';
export function Component22715({ value = 22715, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22715, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22715, 'data-value': derived.doubled }, children);
}
export default Component22715;
