import React from 'react';
const LABEL_13759 = 'component_13759';
export function Component13759({ value = 13759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13759, 'data-value': derived.doubled }, children);
}
export default Component13759;
