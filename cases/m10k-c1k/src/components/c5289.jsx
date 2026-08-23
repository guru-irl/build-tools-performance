import React from 'react';
const LABEL_5289 = 'component_5289';
export function Component5289({ value = 5289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_5289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_5289, 'data-value': derived.doubled }, children);
}
export default Component5289;
