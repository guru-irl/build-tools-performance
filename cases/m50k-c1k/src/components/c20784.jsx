import React from 'react';
const LABEL_20784 = 'component_20784';
export function Component20784({ value = 20784, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_20784, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_20784, 'data-value': derived.doubled }, children);
}
export default Component20784;
