import React from 'react';
const LABEL_8531 = 'component_8531';
export function Component8531({ value = 8531, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_8531, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_8531, 'data-value': derived.doubled }, children);
}
export default Component8531;
