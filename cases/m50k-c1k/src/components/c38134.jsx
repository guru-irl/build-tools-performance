import React from 'react';
const LABEL_38134 = 'component_38134';
export function Component38134({ value = 38134, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_38134, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_38134, 'data-value': derived.doubled }, children);
}
export default Component38134;
