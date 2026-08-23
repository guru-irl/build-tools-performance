import React from 'react';
const LABEL_10355 = 'component_10355';
export function Component10355({ value = 10355, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10355, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10355, 'data-value': derived.doubled }, children);
}
export default Component10355;
