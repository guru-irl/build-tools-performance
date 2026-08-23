import React from 'react';
const LABEL_14104 = 'component_14104';
export function Component14104({ value = 14104, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14104, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14104, 'data-value': derived.doubled }, children);
}
export default Component14104;
