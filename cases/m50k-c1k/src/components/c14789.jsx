import React from 'react';
const LABEL_14789 = 'component_14789';
export function Component14789({ value = 14789, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14789, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14789, 'data-value': derived.doubled }, children);
}
export default Component14789;
