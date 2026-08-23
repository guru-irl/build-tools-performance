import React from 'react';
const LABEL_26378 = 'component_26378';
export function Component26378({ value = 26378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26378, 'data-value': derived.doubled }, children);
}
export default Component26378;
