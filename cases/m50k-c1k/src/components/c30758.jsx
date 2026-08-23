import React from 'react';
const LABEL_30758 = 'component_30758';
export function Component30758({ value = 30758, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30758, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30758, 'data-value': derived.doubled }, children);
}
export default Component30758;
