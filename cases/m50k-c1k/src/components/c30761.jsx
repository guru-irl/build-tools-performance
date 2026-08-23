import React from 'react';
const LABEL_30761 = 'component_30761';
export function Component30761({ value = 30761, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30761, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30761, 'data-value': derived.doubled }, children);
}
export default Component30761;
