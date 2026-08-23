import React from 'react';
const LABEL_10841 = 'component_10841';
export function Component10841({ value = 10841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10841, 'data-value': derived.doubled }, children);
}
export default Component10841;
