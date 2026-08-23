import React from 'react';
const LABEL_2815 = 'component_2815';
export function Component2815({ value = 2815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2815, 'data-value': derived.doubled }, children);
}
export default Component2815;
