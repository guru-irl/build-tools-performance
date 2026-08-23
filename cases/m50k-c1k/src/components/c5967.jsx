import React from 'react';
const LABEL_5967 = 'component_5967';
export function Component5967({ value = 5967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5967, 'data-value': derived.doubled }, children);
}
export default Component5967;
