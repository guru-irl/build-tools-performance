import React from 'react';
const LABEL_23409 = 'component_23409';
export function Component23409({ value = 23409, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23409, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23409, 'data-value': derived.doubled }, children);
}
export default Component23409;
