import React from 'react';
const LABEL_23564 = 'component_23564';
export function Component23564({ value = 23564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23564, 'data-value': derived.doubled }, children);
}
export default Component23564;
