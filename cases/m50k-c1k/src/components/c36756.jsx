import React from 'react';
const LABEL_36756 = 'component_36756';
export function Component36756({ value = 36756, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36756, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36756, 'data-value': derived.doubled }, children);
}
export default Component36756;
