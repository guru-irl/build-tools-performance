import React from 'react';
const LABEL_40289 = 'component_40289';
export function Component40289({ value = 40289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_40289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_40289, 'data-value': derived.doubled }, children);
}
export default Component40289;
