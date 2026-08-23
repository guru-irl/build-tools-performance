import React from 'react';
const LABEL_30233 = 'component_30233';
export function Component30233({ value = 30233, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30233, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30233, 'data-value': derived.doubled }, children);
}
export default Component30233;
