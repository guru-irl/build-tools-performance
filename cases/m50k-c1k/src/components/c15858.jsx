import React from 'react';
const LABEL_15858 = 'component_15858';
export function Component15858({ value = 15858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15858, 'data-value': derived.doubled }, children);
}
export default Component15858;
