import React from 'react';
const LABEL_10523 = 'component_10523';
export function Component10523({ value = 10523, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_10523, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_10523, 'data-value': derived.doubled }, children);
}
export default Component10523;
