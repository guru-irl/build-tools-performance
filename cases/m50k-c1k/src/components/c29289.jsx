import React from 'react';
const LABEL_29289 = 'component_29289';
export function Component29289({ value = 29289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_29289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_29289, 'data-value': derived.doubled }, children);
}
export default Component29289;
