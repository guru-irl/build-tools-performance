import React from 'react';
const LABEL_16378 = 'component_16378';
export function Component16378({ value = 16378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16378, 'data-value': derived.doubled }, children);
}
export default Component16378;
