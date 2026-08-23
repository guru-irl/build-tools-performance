import React from 'react';
const LABEL_40919 = 'component_40919';
export function Component40919({ value = 40919, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40919, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40919, 'data-value': derived.doubled }, children);
}
export default Component40919;
