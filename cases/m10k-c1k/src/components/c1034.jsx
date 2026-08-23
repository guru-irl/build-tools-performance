import React from 'react';
const LABEL_1034 = 'component_1034';
export function Component1034({ value = 1034, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1034, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1034, 'data-value': derived.doubled }, children);
}
export default Component1034;
