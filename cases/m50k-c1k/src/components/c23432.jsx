import React from 'react';
const LABEL_23432 = 'component_23432';
export function Component23432({ value = 23432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23432, 'data-value': derived.doubled }, children);
}
export default Component23432;
