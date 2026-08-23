import React from 'react';
const LABEL_10 = 'component_10';
export function Component10({ value = 10, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10, 'data-value': derived.doubled }, children);
}
export default Component10;
