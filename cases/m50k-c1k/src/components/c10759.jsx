import React from 'react';
const LABEL_10759 = 'component_10759';
export function Component10759({ value = 10759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10759, 'data-value': derived.doubled }, children);
}
export default Component10759;
