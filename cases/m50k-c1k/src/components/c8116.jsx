import React from 'react';
const LABEL_8116 = 'component_8116';
export function Component8116({ value = 8116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8116, 'data-value': derived.doubled }, children);
}
export default Component8116;
