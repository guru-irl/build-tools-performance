import React from 'react';
const LABEL_38757 = 'component_38757';
export function Component38757({ value = 38757, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38757, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38757, 'data-value': derived.doubled }, children);
}
export default Component38757;
