import React from 'react';
const LABEL_33937 = 'component_33937';
export function Component33937({ value = 33937, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_33937, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_33937, 'data-value': derived.doubled }, children);
}
export default Component33937;
