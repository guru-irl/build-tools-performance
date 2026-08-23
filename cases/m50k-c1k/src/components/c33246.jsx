import React from 'react';
const LABEL_33246 = 'component_33246';
export function Component33246({ value = 33246, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33246, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33246, 'data-value': derived.doubled }, children);
}
export default Component33246;
