import React from 'react';
const LABEL_15759 = 'component_15759';
export function Component15759({ value = 15759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15759, 'data-value': derived.doubled }, children);
}
export default Component15759;
