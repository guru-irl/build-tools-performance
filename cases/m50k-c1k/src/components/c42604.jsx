import React from 'react';
const LABEL_42604 = 'component_42604';
export function Component42604({ value = 42604, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42604, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42604, 'data-value': derived.doubled }, children);
}
export default Component42604;
