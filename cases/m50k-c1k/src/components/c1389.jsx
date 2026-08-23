import React from 'react';
const LABEL_1389 = 'component_1389';
export function Component1389({ value = 1389, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1389, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1389, 'data-value': derived.doubled }, children);
}
export default Component1389;
