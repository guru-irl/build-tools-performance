import React from 'react';
const LABEL_31792 = 'component_31792';
export function Component31792({ value = 31792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_31792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_31792, 'data-value': derived.doubled }, children);
}
export default Component31792;
