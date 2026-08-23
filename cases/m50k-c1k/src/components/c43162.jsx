import React from 'react';
const LABEL_43162 = 'component_43162';
export function Component43162({ value = 43162, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43162, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43162, 'data-value': derived.doubled }, children);
}
export default Component43162;
