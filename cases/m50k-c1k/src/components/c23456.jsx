import React from 'react';
const LABEL_23456 = 'component_23456';
export function Component23456({ value = 23456, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_23456, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_23456, 'data-value': derived.doubled }, children);
}
export default Component23456;
