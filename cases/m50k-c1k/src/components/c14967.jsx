import React from 'react';
const LABEL_14967 = 'component_14967';
export function Component14967({ value = 14967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_14967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_14967, 'data-value': derived.doubled }, children);
}
export default Component14967;
