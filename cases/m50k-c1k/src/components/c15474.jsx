import React from 'react';
const LABEL_15474 = 'component_15474';
export function Component15474({ value = 15474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_15474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_15474, 'data-value': derived.doubled }, children);
}
export default Component15474;
