import React from 'react';
const LABEL_9512 = 'component_9512';
export function Component9512({ value = 9512, children }) {
  const derived = React.useMemo(() => ({ label: LABEL_9512, value, doubled: value * 2 }), [value]);
  return React.createElement('div', { className: LABEL_9512, 'data-value': derived.doubled }, children);
}
export default Component9512;
