import React from 'react';
const LABEL_34967 = 'component_34967';
export function Component34967({ value = 34967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34967, 'data-value': derived.doubled }, children);
}
export default Component34967;
