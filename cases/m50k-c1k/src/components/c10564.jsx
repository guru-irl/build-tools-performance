import React from 'react';
const LABEL_10564 = 'component_10564';
export function Component10564({ value = 10564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10564, 'data-value': derived.doubled }, children);
}
export default Component10564;
