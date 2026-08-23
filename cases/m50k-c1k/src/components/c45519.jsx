import React from 'react';
const LABEL_45519 = 'component_45519';
export function Component45519({ value = 45519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_45519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_45519, 'data-value': derived.doubled }, children);
}
export default Component45519;
