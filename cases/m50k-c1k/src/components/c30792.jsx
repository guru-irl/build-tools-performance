import React from 'react';
const LABEL_30792 = 'component_30792';
export function Component30792({ value = 30792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30792, 'data-value': derived.doubled }, children);
}
export default Component30792;
