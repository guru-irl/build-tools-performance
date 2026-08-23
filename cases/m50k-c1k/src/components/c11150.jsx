import React from 'react';
const LABEL_11150 = 'component_11150';
export function Component11150({ value = 11150, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_11150, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_11150, 'data-value': derived.doubled }, children);
}
export default Component11150;
