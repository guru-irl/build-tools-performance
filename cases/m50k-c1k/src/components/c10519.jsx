import React from 'react';
const LABEL_10519 = 'component_10519';
export function Component10519({ value = 10519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10519, 'data-value': derived.doubled }, children);
}
export default Component10519;
