import React from 'react';
const LABEL_10193 = 'component_10193';
export function Component10193({ value = 10193, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10193, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10193, 'data-value': derived.doubled }, children);
}
export default Component10193;
