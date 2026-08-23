import React from 'react';
const LABEL_42474 = 'component_42474';
export function Component42474({ value = 42474, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_42474, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_42474, 'data-value': derived.doubled }, children);
}
export default Component42474;
