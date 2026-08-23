import React from 'react';
const LABEL_34474 = 'component_34474';
export function Component34474({ value = 34474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_34474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_34474, 'data-value': derived.doubled }, children);
}
export default Component34474;
