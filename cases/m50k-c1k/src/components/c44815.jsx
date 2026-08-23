import React from 'react';
const LABEL_44815 = 'component_44815';
export function Component44815({ value = 44815, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_44815, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_44815, 'data-value': derived.doubled }, children);
}
export default Component44815;
