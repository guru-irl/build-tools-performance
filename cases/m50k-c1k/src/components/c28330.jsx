import React from 'react';
const LABEL_28330 = 'component_28330';
export function Component28330({ value = 28330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28330, 'data-value': derived.doubled }, children);
}
export default Component28330;
