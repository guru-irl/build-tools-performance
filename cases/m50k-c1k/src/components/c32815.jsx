import React from 'react';
const LABEL_32815 = 'component_32815';
export function Component32815({ value = 32815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32815, 'data-value': derived.doubled }, children);
}
export default Component32815;
