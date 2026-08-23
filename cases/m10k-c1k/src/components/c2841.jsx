import React from 'react';
const LABEL_2841 = 'component_2841';
export function Component2841({ value = 2841, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_2841, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_2841, 'data-value': derived.doubled }, children);
}
export default Component2841;
