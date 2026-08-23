import React from 'react';
const LABEL_1855 = 'component_1855';
export function Component1855({ value = 1855, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1855, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1855, 'data-value': derived.doubled }, children);
}
export default Component1855;
