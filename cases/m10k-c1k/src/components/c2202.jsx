import React from 'react';
const LABEL_2202 = 'component_2202';
export function Component2202({ value = 2202, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2202, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2202, 'data-value': derived.doubled }, children);
}
export default Component2202;
