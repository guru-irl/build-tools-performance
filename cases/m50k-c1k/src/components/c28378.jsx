import React from 'react';
const LABEL_28378 = 'component_28378';
export function Component28378({ value = 28378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28378, 'data-value': derived.doubled }, children);
}
export default Component28378;
