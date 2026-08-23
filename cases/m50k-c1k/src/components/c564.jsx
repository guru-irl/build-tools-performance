import React from 'react';
const LABEL_564 = 'component_564';
export function Component564({ value = 564, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_564, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_564, 'data-value': derived.doubled }, children);
}
export default Component564;
