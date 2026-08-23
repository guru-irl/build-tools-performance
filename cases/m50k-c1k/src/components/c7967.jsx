import React from 'react';
const LABEL_7967 = 'component_7967';
export function Component7967({ value = 7967, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_7967, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_7967, 'data-value': derived.doubled }, children);
}
export default Component7967;
