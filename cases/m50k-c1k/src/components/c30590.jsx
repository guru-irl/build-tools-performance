import React from 'react';
const LABEL_30590 = 'component_30590';
export function Component30590({ value = 30590, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30590, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30590, 'data-value': derived.doubled }, children);
}
export default Component30590;
