import React from 'react';
const LABEL_1116 = 'component_1116';
export function Component1116({ value = 1116, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1116, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1116, 'data-value': derived.doubled }, children);
}
export default Component1116;
