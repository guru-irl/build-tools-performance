import React from 'react';
const LABEL_4519 = 'component_4519';
export function Component4519({ value = 4519, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_4519, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_4519, 'data-value': derived.doubled }, children);
}
export default Component4519;
