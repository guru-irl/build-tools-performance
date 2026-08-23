import React from 'react';
const LABEL_22571 = 'component_22571';
export function Component22571({ value = 22571, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22571, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22571, 'data-value': derived.doubled }, children);
}
export default Component22571;
