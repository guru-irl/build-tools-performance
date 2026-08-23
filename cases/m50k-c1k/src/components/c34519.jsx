import React from 'react';
const LABEL_34519 = 'component_34519';
export function Component34519({ value = 34519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34519, 'data-value': derived.doubled }, children);
}
export default Component34519;
