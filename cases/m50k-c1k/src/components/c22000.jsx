import React from 'react';
const LABEL_22000 = 'component_22000';
export function Component22000({ value = 22000, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22000, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22000, 'data-value': derived.doubled }, children);
}
export default Component22000;
