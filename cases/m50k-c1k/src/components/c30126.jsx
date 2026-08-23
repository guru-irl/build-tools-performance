import React from 'react';
const LABEL_30126 = 'component_30126';
export function Component30126({ value = 30126, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30126, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30126, 'data-value': derived.doubled }, children);
}
export default Component30126;
