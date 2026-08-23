import React from 'react';
const LABEL_30278 = 'component_30278';
export function Component30278({ value = 30278, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_30278, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_30278, 'data-value': derived.doubled }, children);
}
export default Component30278;
