import React from 'react';
const LABEL_42167 = 'component_42167';
export function Component42167({ value = 42167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42167, 'data-value': derived.doubled }, children);
}
export default Component42167;
