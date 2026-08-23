import React from 'react';
const LABEL_2750 = 'component_2750';
export function Component2750({ value = 2750, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2750, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2750, 'data-value': derived.doubled }, children);
}
export default Component2750;
