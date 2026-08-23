import React from 'react';
const LABEL_1101 = 'component_1101';
export function Component1101({ value = 1101, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1101, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1101, 'data-value': derived.doubled }, children);
}
export default Component1101;
