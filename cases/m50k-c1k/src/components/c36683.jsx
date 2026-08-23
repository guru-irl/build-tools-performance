import React from 'react';
const LABEL_36683 = 'component_36683';
export function Component36683({ value = 36683, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36683, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36683, 'data-value': derived.doubled }, children);
}
export default Component36683;
