import React from 'react';
const LABEL_1214 = 'component_1214';
export function Component1214({ value = 1214, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1214, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1214, 'data-value': derived.doubled }, children);
}
export default Component1214;
