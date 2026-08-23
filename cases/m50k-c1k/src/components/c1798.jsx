import React from 'react';
const LABEL_1798 = 'component_1798';
export function Component1798({ value = 1798, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1798, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1798, 'data-value': derived.doubled }, children);
}
export default Component1798;
