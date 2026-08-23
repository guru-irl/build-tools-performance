import React from 'react';
const LABEL_29482 = 'component_29482';
export function Component29482({ value = 29482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29482, 'data-value': derived.doubled }, children);
}
export default Component29482;
