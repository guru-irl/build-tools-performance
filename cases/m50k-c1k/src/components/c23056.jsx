import React from 'react';
const LABEL_23056 = 'component_23056';
export function Component23056({ value = 23056, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23056, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23056, 'data-value': derived.doubled }, children);
}
export default Component23056;
