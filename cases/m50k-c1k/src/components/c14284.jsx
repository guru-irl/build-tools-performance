import React from 'react';
const LABEL_14284 = 'component_14284';
export function Component14284({ value = 14284, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14284, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14284, 'data-value': derived.doubled }, children);
}
export default Component14284;
