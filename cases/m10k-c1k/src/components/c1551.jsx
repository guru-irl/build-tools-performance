import React from 'react';
const LABEL_1551 = 'component_1551';
export function Component1551({ value = 1551, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1551, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1551, 'data-value': derived.doubled }, children);
}
export default Component1551;
