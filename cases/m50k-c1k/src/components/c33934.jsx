import React from 'react';
const LABEL_33934 = 'component_33934';
export function Component33934({ value = 33934, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33934, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33934, 'data-value': derived.doubled }, children);
}
export default Component33934;
