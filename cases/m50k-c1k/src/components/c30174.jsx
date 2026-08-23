import React from 'react';
const LABEL_30174 = 'component_30174';
export function Component30174({ value = 30174, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30174, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30174, 'data-value': derived.doubled }, children);
}
export default Component30174;
