import React from 'react';
const LABEL_14378 = 'component_14378';
export function Component14378({ value = 14378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14378, 'data-value': derived.doubled }, children);
}
export default Component14378;
