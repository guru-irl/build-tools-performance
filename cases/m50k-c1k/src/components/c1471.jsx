import React from 'react';
const LABEL_1471 = 'component_1471';
export function Component1471({ value = 1471, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1471, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1471, 'data-value': derived.doubled }, children);
}
export default Component1471;
