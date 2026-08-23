import React from 'react';
const LABEL_42798 = 'component_42798';
export function Component42798({ value = 42798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42798, 'data-value': derived.doubled }, children);
}
export default Component42798;
