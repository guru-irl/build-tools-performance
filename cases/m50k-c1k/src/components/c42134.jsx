import React from 'react';
const LABEL_42134 = 'component_42134';
export function Component42134({ value = 42134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42134, 'data-value': derived.doubled }, children);
}
export default Component42134;
