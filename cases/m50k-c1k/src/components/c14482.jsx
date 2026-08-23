import React from 'react';
const LABEL_14482 = 'component_14482';
export function Component14482({ value = 14482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14482, 'data-value': derived.doubled }, children);
}
export default Component14482;
