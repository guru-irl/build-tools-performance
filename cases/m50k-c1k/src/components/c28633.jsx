import React from 'react';
const LABEL_28633 = 'component_28633';
export function Component28633({ value = 28633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28633, 'data-value': derived.doubled }, children);
}
export default Component28633;
