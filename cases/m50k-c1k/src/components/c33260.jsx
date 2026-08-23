import React from 'react';
const LABEL_33260 = 'component_33260';
export function Component33260({ value = 33260, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33260, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33260, 'data-value': derived.doubled }, children);
}
export default Component33260;
