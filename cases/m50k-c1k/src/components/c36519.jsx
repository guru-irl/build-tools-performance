import React from 'react';
const LABEL_36519 = 'component_36519';
export function Component36519({ value = 36519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36519, 'data-value': derived.doubled }, children);
}
export default Component36519;
