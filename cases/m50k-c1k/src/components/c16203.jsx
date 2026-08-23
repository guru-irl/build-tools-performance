import React from 'react';
const LABEL_16203 = 'component_16203';
export function Component16203({ value = 16203, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_16203, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_16203, 'data-value': derived.doubled }, children);
}
export default Component16203;
