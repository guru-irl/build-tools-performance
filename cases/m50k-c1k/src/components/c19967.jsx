import React from 'react';
const LABEL_19967 = 'component_19967';
export function Component19967({ value = 19967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_19967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_19967, 'data-value': derived.doubled }, children);
}
export default Component19967;
