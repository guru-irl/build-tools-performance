import React from 'react';
const LABEL_23473 = 'component_23473';
export function Component23473({ value = 23473, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23473, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23473, 'data-value': derived.doubled }, children);
}
export default Component23473;
