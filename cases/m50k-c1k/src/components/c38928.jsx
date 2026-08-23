import React from 'react';
const LABEL_38928 = 'component_38928';
export function Component38928({ value = 38928, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38928, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38928, 'data-value': derived.doubled }, children);
}
export default Component38928;
