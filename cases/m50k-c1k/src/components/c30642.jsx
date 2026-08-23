import React from 'react';
const LABEL_30642 = 'component_30642';
export function Component30642({ value = 30642, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30642, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30642, 'data-value': derived.doubled }, children);
}
export default Component30642;
