import React from 'react';
const LABEL_1487 = 'component_1487';
export function Component1487({ value = 1487, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1487, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1487, 'data-value': derived.doubled }, children);
}
export default Component1487;
