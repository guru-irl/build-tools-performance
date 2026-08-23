import React from 'react';
const LABEL_32691 = 'component_32691';
export function Component32691({ value = 32691, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32691, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32691, 'data-value': derived.doubled }, children);
}
export default Component32691;
