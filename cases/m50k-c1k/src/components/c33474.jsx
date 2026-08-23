import React from 'react';
const LABEL_33474 = 'component_33474';
export function Component33474({ value = 33474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33474, 'data-value': derived.doubled }, children);
}
export default Component33474;
