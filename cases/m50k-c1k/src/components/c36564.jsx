import React from 'react';
const LABEL_36564 = 'component_36564';
export function Component36564({ value = 36564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36564, 'data-value': derived.doubled }, children);
}
export default Component36564;
