import React from 'react';
const LABEL_1841 = 'component_1841';
export function Component1841({ value = 1841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1841, 'data-value': derived.doubled }, children);
}
export default Component1841;
