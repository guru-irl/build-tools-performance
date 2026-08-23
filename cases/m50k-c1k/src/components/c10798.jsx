import React from 'react';
const LABEL_10798 = 'component_10798';
export function Component10798({ value = 10798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10798, 'data-value': derived.doubled }, children);
}
export default Component10798;
