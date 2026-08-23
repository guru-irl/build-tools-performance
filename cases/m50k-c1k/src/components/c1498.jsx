import React from 'react';
const LABEL_1498 = 'component_1498';
export function Component1498({ value = 1498, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1498, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1498, 'data-value': derived.doubled }, children);
}
export default Component1498;
