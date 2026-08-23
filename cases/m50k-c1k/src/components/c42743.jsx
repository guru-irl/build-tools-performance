import React from 'react';
const LABEL_42743 = 'component_42743';
export function Component42743({ value = 42743, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42743, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42743, 'data-value': derived.doubled }, children);
}
export default Component42743;
