import React from 'react';
const LABEL_36815 = 'component_36815';
export function Component36815({ value = 36815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36815, 'data-value': derived.doubled }, children);
}
export default Component36815;
