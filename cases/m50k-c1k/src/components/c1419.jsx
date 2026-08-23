import React from 'react';
const LABEL_1419 = 'component_1419';
export function Component1419({ value = 1419, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1419, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1419, 'data-value': derived.doubled }, children);
}
export default Component1419;
