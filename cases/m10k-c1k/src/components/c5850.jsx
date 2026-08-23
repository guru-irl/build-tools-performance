import React from 'react';
const LABEL_5850 = 'component_5850';
export function Component5850({ value = 5850, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5850, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5850, 'data-value': derived.doubled }, children);
}
export default Component5850;
