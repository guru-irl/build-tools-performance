import React from 'react';
const LABEL_33551 = 'component_33551';
export function Component33551({ value = 33551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33551, 'data-value': derived.doubled }, children);
}
export default Component33551;
