import React from 'react';
const LABEL_22815 = 'component_22815';
export function Component22815({ value = 22815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_22815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_22815, 'data-value': derived.doubled }, children);
}
export default Component22815;
