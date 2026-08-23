import React from 'react';
const LABEL_30133 = 'component_30133';
export function Component30133({ value = 30133, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30133, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30133, 'data-value': derived.doubled }, children);
}
export default Component30133;
