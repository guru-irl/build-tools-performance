import React from 'react';
const LABEL_20809 = 'component_20809';
export function Component20809({ value = 20809, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20809, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20809, 'data-value': derived.doubled }, children);
}
export default Component20809;
