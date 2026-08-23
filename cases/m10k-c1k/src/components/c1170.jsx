import React from 'react';
const LABEL_1170 = 'component_1170';
export function Component1170({ value = 1170, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1170, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1170, 'data-value': derived.doubled }, children);
}
export default Component1170;
