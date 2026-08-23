import React from 'react';
const LABEL_43333 = 'component_43333';
export function Component43333({ value = 43333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43333, 'data-value': derived.doubled }, children);
}
export default Component43333;
