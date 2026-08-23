import React from 'react';
const LABEL_30629 = 'component_30629';
export function Component30629({ value = 30629, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30629, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30629, 'data-value': derived.doubled }, children);
}
export default Component30629;
