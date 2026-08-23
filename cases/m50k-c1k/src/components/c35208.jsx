import React from 'react';
const LABEL_35208 = 'component_35208';
export function Component35208({ value = 35208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_35208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_35208, 'data-value': derived.doubled }, children);
}
export default Component35208;
