import React from 'react';
const LABEL_30249 = 'component_30249';
export function Component30249({ value = 30249, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30249, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30249, 'data-value': derived.doubled }, children);
}
export default Component30249;
