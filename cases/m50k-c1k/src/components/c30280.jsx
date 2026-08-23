import React from 'react';
const LABEL_30280 = 'component_30280';
export function Component30280({ value = 30280, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30280, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30280, 'data-value': derived.doubled }, children);
}
export default Component30280;
