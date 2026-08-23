import React from 'react';
const LABEL_2445 = 'component_2445';
export function Component2445({ value = 2445, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2445, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2445, 'data-value': derived.doubled }, children);
}
export default Component2445;
