import React from 'react';
const LABEL_1351 = 'component_1351';
export function Component1351({ value = 1351, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1351, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1351, 'data-value': derived.doubled }, children);
}
export default Component1351;
