import React from 'react';
const LABEL_20151 = 'component_20151';
export function Component20151({ value = 20151, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20151, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20151, 'data-value': derived.doubled }, children);
}
export default Component20151;
