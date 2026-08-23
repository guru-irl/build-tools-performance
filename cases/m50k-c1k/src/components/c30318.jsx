import React from 'react';
const LABEL_30318 = 'component_30318';
export function Component30318({ value = 30318, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30318, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30318, 'data-value': derived.doubled }, children);
}
export default Component30318;
