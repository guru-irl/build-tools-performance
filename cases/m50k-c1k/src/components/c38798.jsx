import React from 'react';
const LABEL_38798 = 'component_38798';
export function Component38798({ value = 38798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38798, 'data-value': derived.doubled }, children);
}
export default Component38798;
