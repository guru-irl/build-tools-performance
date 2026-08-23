import React from 'react';
const LABEL_28194 = 'component_28194';
export function Component28194({ value = 28194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_28194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_28194, 'data-value': derived.doubled }, children);
}
export default Component28194;
