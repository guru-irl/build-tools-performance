import React from 'react';
const LABEL_23194 = 'component_23194';
export function Component23194({ value = 23194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23194, 'data-value': derived.doubled }, children);
}
export default Component23194;
