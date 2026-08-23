import React from 'react';
const LABEL_29077 = 'component_29077';
export function Component29077({ value = 29077, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29077, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29077, 'data-value': derived.doubled }, children);
}
export default Component29077;
