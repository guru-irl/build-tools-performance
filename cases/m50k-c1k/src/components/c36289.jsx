import React from 'react';
const LABEL_36289 = 'component_36289';
export function Component36289({ value = 36289, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36289, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36289, 'data-value': derived.doubled }, children);
}
export default Component36289;
