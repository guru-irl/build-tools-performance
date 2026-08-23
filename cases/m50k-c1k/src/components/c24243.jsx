import React from 'react';
const LABEL_24243 = 'component_24243';
export function Component24243({ value = 24243, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_24243, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_24243, 'data-value': derived.doubled }, children);
}
export default Component24243;
