import React from 'react';
const LABEL_36743 = 'component_36743';
export function Component36743({ value = 36743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36743, 'data-value': derived.doubled }, children);
}
export default Component36743;
