import React from 'react';
const LABEL_2 = 'component_2';
export function Component2({ value = 2, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2, 'data-value': derived.doubled }, children);
}
export default Component2;
