import React from 'react';
const LABEL_30333 = 'component_30333';
export function Component30333({ value = 30333, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30333, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30333, 'data-value': derived.doubled }, children);
}
export default Component30333;
