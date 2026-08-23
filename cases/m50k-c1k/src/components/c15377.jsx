import React from 'react';
const LABEL_15377 = 'component_15377';
export function Component15377({ value = 15377, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15377, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15377, 'data-value': derived.doubled }, children);
}
export default Component15377;
