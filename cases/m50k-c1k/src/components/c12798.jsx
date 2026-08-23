import React from 'react';
const LABEL_12798 = 'component_12798';
export function Component12798({ value = 12798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_12798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_12798, 'data-value': derived.doubled }, children);
}
export default Component12798;
