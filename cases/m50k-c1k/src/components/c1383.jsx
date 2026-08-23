import React from 'react';
const LABEL_1383 = 'component_1383';
export function Component1383({ value = 1383, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1383, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1383, 'data-value': derived.doubled }, children);
}
export default Component1383;
