import React from 'react';
const LABEL_23602 = 'component_23602';
export function Component23602({ value = 23602, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23602, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23602, 'data-value': derived.doubled }, children);
}
export default Component23602;
