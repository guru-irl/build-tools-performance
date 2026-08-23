import React from 'react';
const LABEL_36759 = 'component_36759';
export function Component36759({ value = 36759, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36759, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36759, 'data-value': derived.doubled }, children);
}
export default Component36759;
