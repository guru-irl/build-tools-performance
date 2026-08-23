import React from 'react';
const LABEL_30931 = 'component_30931';
export function Component30931({ value = 30931, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30931, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30931, 'data-value': derived.doubled }, children);
}
export default Component30931;
