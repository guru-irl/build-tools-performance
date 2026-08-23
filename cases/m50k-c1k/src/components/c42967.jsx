import React from 'react';
const LABEL_42967 = 'component_42967';
export function Component42967({ value = 42967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42967, 'data-value': derived.doubled }, children);
}
export default Component42967;
