import React from 'react';
const LABEL_30328 = 'component_30328';
export function Component30328({ value = 30328, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30328, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30328, 'data-value': derived.doubled }, children);
}
export default Component30328;
