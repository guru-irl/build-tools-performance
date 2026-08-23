import React from 'react';
const LABEL_21351 = 'component_21351';
export function Component21351({ value = 21351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21351, 'data-value': derived.doubled }, children);
}
export default Component21351;
