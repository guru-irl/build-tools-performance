import React from 'react';
const LABEL_44378 = 'component_44378';
export function Component44378({ value = 44378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44378, 'data-value': derived.doubled }, children);
}
export default Component44378;
