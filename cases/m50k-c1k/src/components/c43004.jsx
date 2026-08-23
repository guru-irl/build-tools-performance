import React from 'react';
const LABEL_43004 = 'component_43004';
export function Component43004({ value = 43004, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_43004, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_43004, 'data-value': derived.doubled }, children);
}
export default Component43004;
