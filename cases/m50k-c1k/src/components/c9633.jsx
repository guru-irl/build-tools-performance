import React from 'react';
const LABEL_9633 = 'component_9633';
export function Component9633({ value = 9633, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9633, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9633, 'data-value': derived.doubled }, children);
}
export default Component9633;
