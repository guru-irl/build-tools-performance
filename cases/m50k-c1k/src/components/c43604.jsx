import React from 'react';
const LABEL_43604 = 'component_43604';
export function Component43604({ value = 43604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43604, 'data-value': derived.doubled }, children);
}
export default Component43604;
