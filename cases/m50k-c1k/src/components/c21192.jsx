import React from 'react';
const LABEL_21192 = 'component_21192';
export function Component21192({ value = 21192, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_21192, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_21192, 'data-value': derived.doubled }, children);
}
export default Component21192;
