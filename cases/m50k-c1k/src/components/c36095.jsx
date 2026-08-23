import React from 'react';
const LABEL_36095 = 'component_36095';
export function Component36095({ value = 36095, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36095, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36095, 'data-value': derived.doubled }, children);
}
export default Component36095;
