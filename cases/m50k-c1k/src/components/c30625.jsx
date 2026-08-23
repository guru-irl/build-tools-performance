import React from 'react';
const LABEL_30625 = 'component_30625';
export function Component30625({ value = 30625, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30625, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30625, 'data-value': derived.doubled }, children);
}
export default Component30625;
