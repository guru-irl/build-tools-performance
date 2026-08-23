import React from 'react';
const LABEL_38519 = 'component_38519';
export function Component38519({ value = 38519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38519, 'data-value': derived.doubled }, children);
}
export default Component38519;
