import React from 'react';
const LABEL_1941 = 'component_1941';
export function Component1941({ value = 1941, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1941, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1941, 'data-value': derived.doubled }, children);
}
export default Component1941;
