import React from 'react';
const LABEL_30148 = 'component_30148';
export function Component30148({ value = 30148, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30148, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30148, 'data-value': derived.doubled }, children);
}
export default Component30148;
