import React from 'react';
const LABEL_1188 = 'component_1188';
export function Component1188({ value = 1188, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1188, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1188, 'data-value': derived.doubled }, children);
}
export default Component1188;
