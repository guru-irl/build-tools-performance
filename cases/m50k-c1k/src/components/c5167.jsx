import React from 'react';
const LABEL_5167 = 'component_5167';
export function Component5167({ value = 5167, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5167, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5167, 'data-value': derived.doubled }, children);
}
export default Component5167;
