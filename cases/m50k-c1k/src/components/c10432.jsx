import React from 'react';
const LABEL_10432 = 'component_10432';
export function Component10432({ value = 10432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10432, 'data-value': derived.doubled }, children);
}
export default Component10432;
