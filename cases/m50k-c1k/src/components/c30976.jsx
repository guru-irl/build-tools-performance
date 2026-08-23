import React from 'react';
const LABEL_30976 = 'component_30976';
export function Component30976({ value = 30976, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30976, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30976, 'data-value': derived.doubled }, children);
}
export default Component30976;
