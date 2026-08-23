import React from 'react';
const LABEL_1149 = 'component_1149';
export function Component1149({ value = 1149, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1149, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1149, 'data-value': derived.doubled }, children);
}
export default Component1149;
