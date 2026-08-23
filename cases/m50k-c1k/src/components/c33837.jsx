import React from 'react';
const LABEL_33837 = 'component_33837';
export function Component33837({ value = 33837, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33837, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33837, 'data-value': derived.doubled }, children);
}
export default Component33837;
