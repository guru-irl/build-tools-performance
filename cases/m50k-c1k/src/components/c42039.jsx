import React from 'react';
const LABEL_42039 = 'component_42039';
export function Component42039({ value = 42039, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42039, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42039, 'data-value': derived.doubled }, children);
}
export default Component42039;
