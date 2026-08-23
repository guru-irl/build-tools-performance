import React from 'react';
const LABEL_33076 = 'component_33076';
export function Component33076({ value = 33076, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33076, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33076, 'data-value': derived.doubled }, children);
}
export default Component33076;
