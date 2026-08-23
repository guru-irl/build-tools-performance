import React from 'react';
const LABEL_30198 = 'component_30198';
export function Component30198({ value = 30198, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30198, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30198, 'data-value': derived.doubled }, children);
}
export default Component30198;
