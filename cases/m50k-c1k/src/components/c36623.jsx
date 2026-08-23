import React from 'react';
const LABEL_36623 = 'component_36623';
export function Component36623({ value = 36623, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36623, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36623, 'data-value': derived.doubled }, children);
}
export default Component36623;
