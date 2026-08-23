import React from 'react';
const LABEL_30504 = 'component_30504';
export function Component30504({ value = 30504, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30504, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30504, 'data-value': derived.doubled }, children);
}
export default Component30504;
