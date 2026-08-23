import React from 'react';
const LABEL_13289 = 'component_13289';
export function Component13289({ value = 13289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13289, 'data-value': derived.doubled }, children);
}
export default Component13289;
