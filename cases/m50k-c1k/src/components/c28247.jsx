import React from 'react';
const LABEL_28247 = 'component_28247';
export function Component28247({ value = 28247, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28247, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28247, 'data-value': derived.doubled }, children);
}
export default Component28247;
