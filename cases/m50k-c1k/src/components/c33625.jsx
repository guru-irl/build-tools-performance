import React from 'react';
const LABEL_33625 = 'component_33625';
export function Component33625({ value = 33625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33625, 'data-value': derived.doubled }, children);
}
export default Component33625;
