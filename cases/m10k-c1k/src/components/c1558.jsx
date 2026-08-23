import React from 'react';
const LABEL_1558 = 'component_1558';
export function Component1558({ value = 1558, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1558, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1558, 'data-value': derived.doubled }, children);
}
export default Component1558;
