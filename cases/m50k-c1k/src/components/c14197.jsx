import React from 'react';
const LABEL_14197 = 'component_14197';
export function Component14197({ value = 14197, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14197, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14197, 'data-value': derived.doubled }, children);
}
export default Component14197;
