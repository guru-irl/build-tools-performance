import React from 'react';
const LABEL_13482 = 'component_13482';
export function Component13482({ value = 13482, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_13482, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_13482, 'data-value': derived.doubled }, children);
}
export default Component13482;
