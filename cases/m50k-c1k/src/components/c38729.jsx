import React from 'react';
const LABEL_38729 = 'component_38729';
export function Component38729({ value = 38729, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38729, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38729, 'data-value': derived.doubled }, children);
}
export default Component38729;
