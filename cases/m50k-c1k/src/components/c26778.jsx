import React from 'react';
const LABEL_26778 = 'component_26778';
export function Component26778({ value = 26778, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_26778, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_26778, 'data-value': derived.doubled }, children);
}
export default Component26778;
