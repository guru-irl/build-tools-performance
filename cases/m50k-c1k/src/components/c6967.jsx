import React from 'react';
const LABEL_6967 = 'component_6967';
export function Component6967({ value = 6967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6967, 'data-value': derived.doubled }, children);
}
export default Component6967;
