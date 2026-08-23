import React from 'react';
const LABEL_35759 = 'component_35759';
export function Component35759({ value = 35759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35759, 'data-value': derived.doubled }, children);
}
export default Component35759;
