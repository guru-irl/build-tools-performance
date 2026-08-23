import React from 'react';
const LABEL_10557 = 'component_10557';
export function Component10557({ value = 10557, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10557, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10557, 'data-value': derived.doubled }, children);
}
export default Component10557;
