import React from 'react';
const LABEL_1268 = 'component_1268';
export function Component1268({ value = 1268, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1268, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1268, 'data-value': derived.doubled }, children);
}
export default Component1268;
