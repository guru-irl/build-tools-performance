import React from 'react';
const LABEL_42829 = 'component_42829';
export function Component42829({ value = 42829, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42829, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42829, 'data-value': derived.doubled }, children);
}
export default Component42829;
