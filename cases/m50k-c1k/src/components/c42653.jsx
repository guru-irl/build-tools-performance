import React from 'react';
const LABEL_42653 = 'component_42653';
export function Component42653({ value = 42653, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42653, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42653, 'data-value': derived.doubled }, children);
}
export default Component42653;
