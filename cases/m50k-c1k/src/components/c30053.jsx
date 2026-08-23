import React from 'react';
const LABEL_30053 = 'component_30053';
export function Component30053({ value = 30053, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30053, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30053, 'data-value': derived.doubled }, children);
}
export default Component30053;
