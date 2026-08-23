import React from 'react';
const LABEL_31208 = 'component_31208';
export function Component31208({ value = 31208, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31208, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31208, 'data-value': derived.doubled }, children);
}
export default Component31208;
