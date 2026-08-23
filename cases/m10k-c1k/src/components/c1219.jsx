import React from 'react';
const LABEL_1219 = 'component_1219';
export function Component1219({ value = 1219, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1219, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1219, 'data-value': derived.doubled }, children);
}
export default Component1219;
