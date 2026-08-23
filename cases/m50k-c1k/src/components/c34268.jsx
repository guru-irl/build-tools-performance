import React from 'react';
const LABEL_34268 = 'component_34268';
export function Component34268({ value = 34268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34268, 'data-value': derived.doubled }, children);
}
export default Component34268;
