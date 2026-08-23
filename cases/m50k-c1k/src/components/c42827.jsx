import React from 'react';
const LABEL_42827 = 'component_42827';
export function Component42827({ value = 42827, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42827, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42827, 'data-value': derived.doubled }, children);
}
export default Component42827;
