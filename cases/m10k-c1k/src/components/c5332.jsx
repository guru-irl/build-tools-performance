import React from 'react';
const LABEL_5332 = 'component_5332';
export function Component5332({ value = 5332, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5332, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5332, 'data-value': derived.doubled }, children);
}
export default Component5332;
