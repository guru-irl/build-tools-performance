import React from 'react';
const LABEL_30919 = 'component_30919';
export function Component30919({ value = 30919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30919, 'data-value': derived.doubled }, children);
}
export default Component30919;
