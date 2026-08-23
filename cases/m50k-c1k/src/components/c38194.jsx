import React from 'react';
const LABEL_38194 = 'component_38194';
export function Component38194({ value = 38194, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38194, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38194, 'data-value': derived.doubled }, children);
}
export default Component38194;
