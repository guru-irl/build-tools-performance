import React from 'react';
const LABEL_2113 = 'component_2113';
export function Component2113({ value = 2113, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2113, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2113, 'data-value': derived.doubled }, children);
}
export default Component2113;
