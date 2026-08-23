import React from 'react';
const LABEL_36432 = 'component_36432';
export function Component36432({ value = 36432, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_36432, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_36432, 'data-value': derived.doubled }, children);
}
export default Component36432;
