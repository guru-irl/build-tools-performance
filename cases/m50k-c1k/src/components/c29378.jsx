import React from 'react';
const LABEL_29378 = 'component_29378';
export function Component29378({ value = 29378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29378, 'data-value': derived.doubled }, children);
}
export default Component29378;
