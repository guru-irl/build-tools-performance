import React from 'react';
const LABEL_289 = 'component_289';
export function Component289({ value = 289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_289, 'data-value': derived.doubled }, children);
}
export default Component289;
