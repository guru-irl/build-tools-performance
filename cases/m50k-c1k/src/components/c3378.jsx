import React from 'react';
const LABEL_3378 = 'component_3378';
export function Component3378({ value = 3378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3378, 'data-value': derived.doubled }, children);
}
export default Component3378;
