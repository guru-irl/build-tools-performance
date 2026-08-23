import React from 'react';
const LABEL_14798 = 'component_14798';
export function Component14798({ value = 14798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14798, 'data-value': derived.doubled }, children);
}
export default Component14798;
