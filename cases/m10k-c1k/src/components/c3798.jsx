import React from 'react';
const LABEL_3798 = 'component_3798';
export function Component3798({ value = 3798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3798, 'data-value': derived.doubled }, children);
}
export default Component3798;
