import React from 'react';
const LABEL_32602 = 'component_32602';
export function Component32602({ value = 32602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_32602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_32602, 'data-value': derived.doubled }, children);
}
export default Component32602;
