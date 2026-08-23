import React from 'react';
const LABEL_13378 = 'component_13378';
export function Component13378({ value = 13378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13378, 'data-value': derived.doubled }, children);
}
export default Component13378;
