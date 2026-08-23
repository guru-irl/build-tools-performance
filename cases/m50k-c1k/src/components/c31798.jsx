import React from 'react';
const LABEL_31798 = 'component_31798';
export function Component31798({ value = 31798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31798, 'data-value': derived.doubled }, children);
}
export default Component31798;
