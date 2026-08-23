import React from 'react';
const LABEL_23057 = 'component_23057';
export function Component23057({ value = 23057, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23057, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23057, 'data-value': derived.doubled }, children);
}
export default Component23057;
