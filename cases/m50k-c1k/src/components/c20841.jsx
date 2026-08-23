import React from 'react';
const LABEL_20841 = 'component_20841';
export function Component20841({ value = 20841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20841, 'data-value': derived.doubled }, children);
}
export default Component20841;
