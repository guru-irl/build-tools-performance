import React from 'react';
const LABEL_8046 = 'component_8046';
export function Component8046({ value = 8046, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8046, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8046, 'data-value': derived.doubled }, children);
}
export default Component8046;
