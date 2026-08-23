import React from 'react';
const LABEL_23330 = 'component_23330';
export function Component23330({ value = 23330, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23330, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23330, 'data-value': derived.doubled }, children);
}
export default Component23330;
