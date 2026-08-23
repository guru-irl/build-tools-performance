import React from 'react';
const LABEL_1137 = 'component_1137';
export function Component1137({ value = 1137, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1137, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1137, 'data-value': derived.doubled }, children);
}
export default Component1137;
