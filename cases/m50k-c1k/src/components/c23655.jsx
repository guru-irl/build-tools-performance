import React from 'react';
const LABEL_23655 = 'component_23655';
export function Component23655({ value = 23655, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23655, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23655, 'data-value': derived.doubled }, children);
}
export default Component23655;
