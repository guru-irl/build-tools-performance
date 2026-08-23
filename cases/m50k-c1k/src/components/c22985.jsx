import React from 'react';
const LABEL_22985 = 'component_22985';
export function Component22985({ value = 22985, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22985, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22985, 'data-value': derived.doubled }, children);
}
export default Component22985;
