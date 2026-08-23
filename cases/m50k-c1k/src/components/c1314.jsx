import React from 'react';
const LABEL_1314 = 'component_1314';
export function Component1314({ value = 1314, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1314, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1314, 'data-value': derived.doubled }, children);
}
export default Component1314;
