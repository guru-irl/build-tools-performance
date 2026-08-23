import React from 'react';
const LABEL_6289 = 'component_6289';
export function Component6289({ value = 6289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_6289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_6289, 'data-value': derived.doubled }, children);
}
export default Component6289;
