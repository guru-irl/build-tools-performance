import React from 'react';
const LABEL_22918 = 'component_22918';
export function Component22918({ value = 22918, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22918, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22918, 'data-value': derived.doubled }, children);
}
export default Component22918;
