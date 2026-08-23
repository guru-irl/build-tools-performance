import React from 'react';
const LABEL_5378 = 'component_5378';
export function Component5378({ value = 5378, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5378, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5378, 'data-value': derived.doubled }, children);
}
export default Component5378;
