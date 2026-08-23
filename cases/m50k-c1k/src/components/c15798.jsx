import React from 'react';
const LABEL_15798 = 'component_15798';
export function Component15798({ value = 15798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15798, 'data-value': derived.doubled }, children);
}
export default Component15798;
