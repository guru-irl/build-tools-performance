import React from 'react';
const LABEL_1438 = 'component_1438';
export function Component1438({ value = 1438, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1438, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1438, 'data-value': derived.doubled }, children);
}
export default Component1438;
