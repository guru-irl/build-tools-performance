import React from 'react';
const LABEL_14497 = 'component_14497';
export function Component14497({ value = 14497, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14497, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14497, 'data-value': derived.doubled }, children);
}
export default Component14497;
