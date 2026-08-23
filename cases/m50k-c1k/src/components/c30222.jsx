import React from 'react';
const LABEL_30222 = 'component_30222';
export function Component30222({ value = 30222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30222, 'data-value': derived.doubled }, children);
}
export default Component30222;
