import React from 'react';
const LABEL_1292 = 'component_1292';
export function Component1292({ value = 1292, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1292, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1292, 'data-value': derived.doubled }, children);
}
export default Component1292;
