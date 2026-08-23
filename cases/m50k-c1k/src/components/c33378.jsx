import React from 'react';
const LABEL_33378 = 'component_33378';
export function Component33378({ value = 33378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33378, 'data-value': derived.doubled }, children);
}
export default Component33378;
