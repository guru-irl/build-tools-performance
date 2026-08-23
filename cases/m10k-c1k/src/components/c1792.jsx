import React from 'react';
const LABEL_1792 = 'component_1792';
export function Component1792({ value = 1792, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_1792, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_1792, 'data-value': derived.doubled }, children);
}
export default Component1792;
