import React from 'react';
const LABEL_36551 = 'component_36551';
export function Component36551({ value = 36551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36551, 'data-value': derived.doubled }, children);
}
export default Component36551;
