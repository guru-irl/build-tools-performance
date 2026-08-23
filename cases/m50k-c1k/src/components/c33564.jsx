import React from 'react';
const LABEL_33564 = 'component_33564';
export function Component33564({ value = 33564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33564, 'data-value': derived.doubled }, children);
}
export default Component33564;
