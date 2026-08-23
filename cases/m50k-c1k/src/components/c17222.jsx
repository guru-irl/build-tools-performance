import React from 'react';
const LABEL_17222 = 'component_17222';
export function Component17222({ value = 17222, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_17222, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_17222, 'data-value': derived.doubled }, children);
}
export default Component17222;
