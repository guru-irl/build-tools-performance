import React from 'react';
const LABEL_46378 = 'component_46378';
export function Component46378({ value = 46378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_46378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_46378, 'data-value': derived.doubled }, children);
}
export default Component46378;
