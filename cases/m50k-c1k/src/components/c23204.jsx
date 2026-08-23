import React from 'react';
const LABEL_23204 = 'component_23204';
export function Component23204({ value = 23204, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23204, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23204, 'data-value': derived.doubled }, children);
}
export default Component23204;
