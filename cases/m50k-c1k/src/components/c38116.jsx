import React from 'react';
const LABEL_38116 = 'component_38116';
export function Component38116({ value = 38116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38116, 'data-value': derived.doubled }, children);
}
export default Component38116;
