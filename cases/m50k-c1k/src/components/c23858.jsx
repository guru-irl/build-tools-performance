import React from 'react';
const LABEL_23858 = 'component_23858';
export function Component23858({ value = 23858, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23858, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23858, 'data-value': derived.doubled }, children);
}
export default Component23858;
