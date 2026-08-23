import React from 'react';
const LABEL_10917 = 'component_10917';
export function Component10917({ value = 10917, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10917, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10917, 'data-value': derived.doubled }, children);
}
export default Component10917;
