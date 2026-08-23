import React from 'react';
const LABEL_20551 = 'component_20551';
export function Component20551({ value = 20551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20551, 'data-value': derived.doubled }, children);
}
export default Component20551;
