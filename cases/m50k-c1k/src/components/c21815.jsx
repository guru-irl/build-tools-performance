import React from 'react';
const LABEL_21815 = 'component_21815';
export function Component21815({ value = 21815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21815, 'data-value': derived.doubled }, children);
}
export default Component21815;
