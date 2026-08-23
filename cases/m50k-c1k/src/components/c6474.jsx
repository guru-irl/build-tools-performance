import React from 'react';
const LABEL_6474 = 'component_6474';
export function Component6474({ value = 6474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6474, 'data-value': derived.doubled }, children);
}
export default Component6474;
