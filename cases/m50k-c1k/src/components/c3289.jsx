import React from 'react';
const LABEL_3289 = 'component_3289';
export function Component3289({ value = 3289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_3289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_3289, 'data-value': derived.doubled }, children);
}
export default Component3289;
