import React from 'react';
const LABEL_35351 = 'component_35351';
export function Component35351({ value = 35351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35351, 'data-value': derived.doubled }, children);
}
export default Component35351;
