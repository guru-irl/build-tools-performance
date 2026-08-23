import React from 'react';
const LABEL_30034 = 'component_30034';
export function Component30034({ value = 30034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30034, 'data-value': derived.doubled }, children);
}
export default Component30034;
